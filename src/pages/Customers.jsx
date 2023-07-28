import React from "react";

import Table from "../components/tableDash/Table";

import customerList from "../assets/JsonData/customers-list.json";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/tableDash/table.css";
const customerTableHead = [
  "",
  "Nom",
  "email",
  "phone",
  "Adresse",
  "Produits Vendus",
  "Dates de rencontre",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.Id_planteur}</td>
    <td>{item.Num_pieceP}</td>
    <td>{item.Nom_planteur}</td>
    <td>{item.Pren_planteur}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const apiUrl = "http://192.168.252.74:8082/planteur/viewPlanteur.php";
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
      <h2 className="page-header">Liste des vendeurs rencontrés</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div>

                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nom</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.Id_planteur}>
                            <td>{item.Num_pieceP}</td>
                            <td>{item.nom}</td>
                            <td>{item.description}</td>
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
    </div>
  );
};

export default Customers;