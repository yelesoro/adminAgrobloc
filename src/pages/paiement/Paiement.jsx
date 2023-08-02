// @flow strict

import * as React from 'react';
import './paiement.css'
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Paiement() {

    const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
            <h1>Paiment du vendeur 1</h1>
            <div className="bigdiv">
                <div className='title'>
                <p>Numéro de la commande: <span>konan</span></p>
                <p>Nom du vendeur: <span>konan</span></p>
                <p>Nom de l'acheteur: <span>konan</span></p>
                <p>Argent du vendeur : <span>konan</span></p>
                <p>Compte pour le débit: <span>konan</span></p>

                </div>

                <button className='btn' onClick={togglePopup}>Payer le vendeur</button>

            </div>
            {isOpen && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>Paiement du vendeur Konan</h2><br />
                        <p>Vous allez créditer le compte de ce vendeur</p>
                        <p>Continuer?</p>
                        
                        <Link to = {'/'}>
                        <button onClick={togglePopup} className="boutton">
                          oui
                        </button>
                        </Link>
  
                      
                        <br />
                      </div>
                    </div>
                  )}
        </div>
    );
};

export default Paiement;