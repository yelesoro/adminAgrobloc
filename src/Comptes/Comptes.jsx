import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import  "react-toastify/dist/ReactToastify.css";
import "./Compte.css";

// Liste de comptes (exemple)
const transactions = [
    {
        id: 1,
        nomVendeur: 'Vendeur 1',
        nomAcheteur: 'Acheteur 1',
        quantite: 5,
        prix: 150000,
        date: '2023-07-31',
    },
    {
        id: 2,
        nomVendeur: 'Vendeur 2',
        nomAcheteur: 'Acheteur 1',
        quantite: 3,
        prix: 37000,
        date: '2023-08-01',
    },
    {
        id: 3,
        nomVendeur: 'Vendeur 3',
        nomAcheteur: 'Acheteur 2',
        quantite: 8,
        prix: 500000,
        date: '2023-08-02',
    },
    // Ajoutez d'autres transactions si nécessaire
];

const Comptes = () => {
    const [selectedAcheteur, setSelectedAcheteur] = useState(null);

    const handleAcheteurClick = (acheteur) => {
        setSelectedAcheteur(acheteur);
    };

    const getVendeursListAndSum = (selectedAcheteur) => {
        if (!selectedAcheteur) return null;

        const vendeurs = new Set();
        const sumByVendeur = {};
        const transactionsByVendeur = {};

        transactions.forEach((transaction) => {
            if (transaction.nomAcheteur === selectedAcheteur) {
                vendeurs.add(transaction.nomVendeur);
                if (!sumByVendeur[transaction.nomVendeur]) {
                    sumByVendeur[transaction.nomVendeur] = 0;
                    transactionsByVendeur[transaction.nomVendeur] = [];
                }
                sumByVendeur[transaction.nomVendeur] += transaction.prix;
                transactionsByVendeur[transaction.nomVendeur].push(transaction);
            }
        });

        const vendeursList = Array.from(vendeurs);
        return { vendeursList, sumByVendeur, transactionsByVendeur };
    };

    const vendeursData = getVendeursListAndSum(selectedAcheteur);
    const { vendeursList, sumByVendeur, transactionsByVendeur } = vendeursData || {};

    // const onDelete = (id) => {
    //     if (window.confirm("Are you sure you want to delete it?")) {
    //         // Step to delete anime with a particular id from the database
    //         fireDb.child(`Anime/${id}`).remove((err) => {
    //             if (err) {
    //                 toast.error("Error deleting from the database");
    //             } else {
    //                 toast.success("Anime deleted from the database");
    //             }
    //         });
    //     }
    // };

    return (
        <div className="page">
            <h1>Liste des commandes livrées</h1>
            <p>Le paiement des vendeurs s'effectue ici</p><br /><br />
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
                        <tr key={transaction.id}>
                            <td
                                className="acheteur-cell"
                                onClick={() => handleAcheteurClick(transaction.nomAcheteur)}
                            >
                                {transaction.nomAcheteur}
                            </td>
                            <td>{transaction.quantite} Kg</td>
                            <td>{transaction.prix} Fcfa</td>
                            <td>{transaction.date}</td>
                            <td>
                                <button
                                    className="btn btn-delete"
                                    onClick={() => handleAcheteurClick(transaction.nomAcheteur)}
                                >
                                    Voir Plus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br /><br />
            {selectedAcheteur && (
                <div className="vendeurs-and-sums">
                    <h2>Liste des vendeurs pour {selectedAcheteur}</h2>
                    {vendeursList.map((vendeur) => (
                        <div key={vendeur} className="vendeur-sum">
                            <div>
                            <h3>{vendeur}</h3>
                            <p>Prix : {sumByVendeur[vendeur]} Fcfa</p>
                            <ul>
                                {transactionsByVendeur[vendeur].map((transaction) => (
                                    <li key={transaction.id}>
                                        {transaction.nomAcheteur} - {transaction.quantite} Kg - {transaction.prix} Fcfa
                                    </li>
                                ))}
                            </ul><br /><br />
                            </div>
                            <button className="btn2"><Link to={'/paiement'}>Procéder au paiement</Link></button>
                            {/* <button className="btn btn-delete" onClick={() => onDelete(transactions.id)}>Transferer</button> */}
                        </div>
                    ))}
                </div>
            )}
            {/* Toast container to display toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default Comptes;
