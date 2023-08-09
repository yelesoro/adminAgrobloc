// @flow strict
import Header from "./header/Header.jsx";
import "./vendeurparcommande.css";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {BsFillTelephoneFill, } from "react-icons/bs"

import * as React from "react";

function VendeurbyCommande() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://192.168.252.192:7001/contracts/all";

    // Appel à l'API avec Axios
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);
  



  const [datav, setDatav] = useState([]);

  const getData = async () => {
    try {
      const apiUrl = "http://192.168.252.74:8082/commande/viewCom.php";
      const response = await axios.get(apiUrl);
      setDatav(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <h1>DETAILS DE LA COMMANDE</h1>
      <div >
        <div className="review" id="Review">
          <div className="review_box">
            <div className="review_card2">
              <div className="review_profile"> </div>
              <br />
              <div className="review_text">
                <center>
                  <h2 className="name">Infos de l'acheteur</h2>
                </center>
                <br />
                <br />
                <div>
                  <p>
                    <span>Nom: </span>
                    Lorem <br />
                  </p>
                  <br />
                  <p>
                    <span>Prénom: </span>
                    Lorem <br />
                  </p>
                  <br />
                  <p>
                    <span>Nom: </span>
                    Lorem <br />
                  </p>
                  <br />
                  <p>
                    <span>Nom: </span>
                    Lorem <br />
                  </p>
                  <br />
                </div>
              </div>
            </div>

            {datav.map((item, index)=>(
                <div className="review_card">
                <div className="review_profile"> </div>
                <br />
                <div className="review_text">
                  <h2 className="name">Vendeur n° {index+1}</h2>
                  <br />
                  <br />
                  <div>
                    <p className="divtext">
                      <span>Nom et prénom: </span>
                      soro
                    </p>
                    <br />
                    <p>
                      <span>Région: </span>
                      soro
                    </p>
                    <br />
                    <p>
                      <span>Quantité disponible </span>
                      soro
                    </p>
                    <br />
                    <p>
                      <span>Quantité demandée: </span>
                      soro
                    </p>
                    <br />
                    <p>
                      <span>Prix associé: </span>
                      soro
                    </p>
                  </div>
                  <br />
                  <br />
                  <div className="divb">
                    <button className="boutton" onClick={togglePopup}>
                      Contacter le vendeur
                    </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
                    <div className="popup">
                      <div className="popup-content">
                        <h2>Comment le contacter</h2><br />
                        <div>
                          <BsFillTelephoneFill className="i"/>
                          O77828327813
                        </div>
                        <div><br />
                          <BsWhatsapp className="i"/>
                          O77828327813
                        </div>
                        <button onClick={togglePopup} className="boutton">
                          Fermer
                        </button>
  
                      
                        <br />
                      </div>
                    </div>
                  )}
        </div>
      </div>
    </div>
  );
}

export default VendeurbyCommande;
