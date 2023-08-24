import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Compte.css";
import { Link } from "react-router-dom";

const Comptes = () => {
    const [selectedAcheteur, setSelectedAcheteur] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [selectedTransactionDetails, setSelectedTransactionDetails] = useState(null);

    useEffect(() => {
        // Faites l'appel à l'API ici en remplaçant "byerId" par la valeur souhaitée
        const apiUrl = "http://192.168.252.192:7001/contracts/allforbuyer/2"; // Exemple

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Filtrer les transactions où le "productName" est égal à "Cacao" et le "status" est égal à "PENDING"
                const filteredTransactions = data.filter(transaction =>
                    transaction.productName === "Cacao" 
                );
                setTransactions(filteredTransactions); // Mettez à jour les transactions avec les données filtrées
            })
            .catch((error) => {
                console.error("Une erreur s'est produite :", error);
            });
    }, []);

    const handleAcheteurClick = (acheteur) => {
        setSelectedAcheteur(acheteur);
    };

    const handleVoirPlusClick = (details) => {
        setSelectedTransactionDetails(details);
    };

    //message de confirmation
    /*const handlePaymentConfirmation = () => {
        window.location.href = "./Payment.js" //une autre manière de redirection
        /*if (selectedTransactionDetails) {
            const confirmationMessage = `Voulez-vous lancer le paiement de ${selectedTransactionDetails.amount} Fcfa au vendeur ${selectedTransactionDetails.vendorName} ?`;
            const userConfirmed = window.confirm(confirmationMessage);
            if (userConfirmed) {
                // Ici, vous pouvez mettre en place la logique de paiement
                // Par exemple, vous pouvez afficher une notification de paiement réussi
                toast.success("Le paiement a été effectué avec succès !");
            }
        }
    };*/

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="page">
            <h1>Liste des commandes livrées</h1>
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Nom Acheteur</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.contractId} className="trc">
                            <td
                                className="acheteur-cell"
                                onClick={() => handleAcheteurClick('CoopFermes')}
                            >
                                {'CoopFermes'}
                            </td>
                            <td>{transaction.weight} Kg</td>
                            <td>{transaction.details[0].amount} Fcfa</td>
                            <td>{formatDate(new Date())}</td>
                            <td>
                                <button
                                    className="btnn"
                                    onClick={() => handleVoirPlusClick(transaction.details[0])}
                                >
                                    Voir Plus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedTransactionDetails && (
                <div className="transaction-details">
                    <h2>Détails de la transaction</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom du vendeur</th>
                                <th>Montant</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedTransactionDetails.vendorName}</td>
                                <td>{selectedTransactionDetails.amount} Fcfa</td>
                                <td>
                                    <Link to={{
                                        pathname: "/Paiement",
                                        state: {
                                            vendorName: selectedTransactionDetails.vendorName,
                                            contract: transactions.contractCode,
                                            amount: selectedTransactionDetails.amount,
                                            acheteur: "CoopFermes"
                                        }
                                    }}>{/* Utilisez le chemin correct vers la page Payment */}
                                        <button className="proceder-btn" /*onClick={handlePaymentConfirmation}*/>
                                            Passer au paiement
                                        </button>
                                    </Link>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Comptes;

