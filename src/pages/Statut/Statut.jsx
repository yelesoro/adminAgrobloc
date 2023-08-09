// @flow strict
import Header from "../../components/headercommandes/Header";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../components/tableDash/table.css"
import './Statut.css'

const StatutCommande = ({ statut }) => {
  let statusText;

  if (statut == "COMPLETED") {
    statusText = "Terminé";
    return (
      <div className="statutCO">
        <center>
          <p>{statusText}</p>
        </center>
      </div>
    );
  } else if(statut == "CANCELLED"){
    statusText = "Refusée";
    return (
      <div className="statutCA">
        <center>
          <p>{statusText}</p>
        </center>
      </div>
    );
  }
  else if(statut == "PENDING"){
    statusText = "En attente ";
    return (
      <div className="statutPE">
        <center>
          <p> {statusText}</p>
        </center>
      </div>
    );
  }else{
    statusText = "Non déterminé";
    return (
      <div className="statut">
        <center>
          <p>{statusText}</p>
        </center>
      </div>
    );
  }
};

function Statut() {
  const [data, setData] = useState([]);
  console.log(data[0])

  const getData = async () => {
    try {
      const apiUrl = "http://192.168.252.192:7001/contracts/all";
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1> Statut des commandes </h1>
      <br />
      <br />

      <div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="cardbody">
                <table>
                  <thead>
                    <tr>
                      <th>Code du contrat</th>
                      <th>Nom du produit</th>
                      <th>Poids demandé</th>
                      <th>Prix </th>
                      <th>Statut de la commande</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.Id}>
                        <td>{item.contractCode}</td>
                        <td>{item.productName}</td>
                        <td>{item.weight} kg</td>
                        <td>{item.amount} frcs cfa</td>
                        <Link to={"/vendeurparcommande"}>
                          <td>
                            <StatutCommande statut={item.status} />
                          </td>
                        </Link>
                        <td ><Link to = {"/vendeurparcommande"} ><div className="btn1"><center>Voir plus</center></div ></Link></td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statut;
