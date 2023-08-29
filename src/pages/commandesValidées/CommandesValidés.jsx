import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../../components/tableDash/table.css";
import "../Statut/Statut.css";
import "./Commande.css";

const CommandesValides = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    try {
      const apiUrl = "http://192.168.252.192:7001/contracts/all?status=PENDING";
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const DataStatus = async (contractId) => {
    try {
      const apiUrl = `http://192.168.252.192:7001/contracts/update-status/valided/${contractId}
      `;
      const response = await axios.get(apiUrl);
      // Utilisez la réponse comme nécessaire
      console.log(response.data);
      togglePopup();
    } catch (error) {
      console.error("Erreur lors de la récupération des détails de la commande :", error);
    }
  };


  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const sortedData = data.sort((a, b) => b.contractId - a.contractId);
  console.log(sortedData)



  return (
    <div>
      <h1>Statut des commandes</h1>
      <br />
      <br />
      <center>      <div className="header1">
                <nav className="navbar1">
                    <Link to={'/comdencours'} className="linkp">EnCoursDeValidation</Link>
                    <Link className="link" to={'/statut'}>Validées</Link>
                    <Link className="link" to={'/livre'}>Livrées</Link>
                </nav>
            </div></center>

      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="cardbody">
                <table>
                  <thead>
                    <tr>
                      <td>Numéro de contrat</td>
                      <td>Numéro du produit</td>
                      <td>Poids de la commande</td>
                      <td>Prix de la commande</td>
                      <td>Statut de la commande</td>
                      <td>Action sur la commande</td>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((item) => (
                      <tr key={item.contractId}>
                        <td>{item.contractCode}</td>
                        <td>{item.productName}</td>
                        <td>{item.weight} kg</td>
                        <td>{item.amount} frcs cfa</td>
                        <td>
                          <div className="statutPE">
                            <center>
                              <p>{status[item.contractId] || "En attente"}</p>
                            </center>
                          </div>
                        </td>
                        <td className="td1">
                          <button className="btn4" onClick={() => DataStatus(item.contractId)}>
                            <div>
                              <center>Valider</center>
                            </div>
                          </button>
                          <Link className="btn3">
                            <div>
                              <center>Annuler</center>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ))}
                          {isOpen && (
          <div className="popup">
            <div className="popup-content">
              <h2>Vous venez de valider une commande</h2>
              <p>Vous pouvez continuer </p>
              <button onClick={togglePopup} className="boutton">
              OK
              </button>
   
              <br />
            </div>
          </div>
        )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CommandesValides;
