import React, { useState } from 'react';
import './paiement.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Paiement() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const history = useHistory();

    const handleConfirmation = () => {
        // Effectuez ici la logique de paiement si nécessaire
        // ...

        // Affichez la notification de succès
        toast.success("Paiement effectué avec succès !", {
            onClose: () => {
                // Redirigez l'utilisateur vers la page Dashboard après la notification
                history.push("/");
            }
        });
    };

    // Récupérez les informations transmises depuis la page Comptes
    const location = useLocation();
    const { vendorName, contractCode, amount, acheteur } = location.state;

    return (
        <div>
            <h1>Paiement de {vendorName}</h1>
            <div className="bigdiv">
                <div className='title'>
                    <p>Numéro de la commande: <span>CT-195898{contractCode}</span></p>
                    <p>Nom du vendeur: <span>{vendorName}</span></p>
                    <p>Nom de l'acheteur: <span>{acheteur}</span></p>
                    <p>Argent du vendeur : <span>{amount} Fcfa</span></p>
                    <p>Compte pour le débit: <span>4045-3595-6239-8577</span></p>
                </div>

                <button className='btn' onClick={togglePopup}>Payer</button>


            </div>
            <ToastContainer />
            {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Vous allez procéder au paiement du <br /> vendeur {vendorName}</h2><br /><br />
              <p>Somme :{amount} Fcfa </p><br />
              <p>Continuer? </p>

              <button onClick={() => {togglePopup(); handleConfirmation();}} className="boutton">
  Oui
</button>

            </div>
          </div>
        )}
        </div>
    );
};

export default Paiement;
