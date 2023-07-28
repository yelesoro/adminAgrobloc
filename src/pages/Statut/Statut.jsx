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

  if (statut == 1) {
    statusText = "Terminé";
    return (
      <div className="statutT">
        <center>
          <p>{statusText}</p>
        </center>
      </div>
    );
  } else {
    statusText = "En cours";
    return (
      <div className="statutF">
        <center>
          <p> {statusText}</p>
        </center>
      </div>
    );
  }
};

function Statut() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const apiUrl = "http://192.168.252.74:8082/commande/viewCom.php";
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
              <div className="card__body">
                <table>
                  <thead>
                    <tr>
                      <th>Nom du produit</th>
                      <th>Quantité commandée</th>
                      <th>Prix de la commande</th>
                      <th>Statut de la commande</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.Id}>
                        <td>{item.Nom_com}</td>
                        <td>{item.Quan_com} kg</td>
                        <td>{item.Pri_com} frcs cfa</td>
                        <Link to={"/vendeurparcommande"}>
                          <td>
                            <StatutCommande statut={item.Statut} />
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
