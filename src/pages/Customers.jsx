import React from 'react'

import Table from '../components/tableDash/Table'

import customerList from '../assets/JsonData/customers-list.json'

import { useState,useEffect } from 'react'
import axios from "axios"

const customerTableHead = [
    '',
    'Nom',
    'email',
    'phone',

   
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={item}>
        <td>{item.Id_planteur}</td>
        <td>{item.Num_pieceP}</td>
        <td>{item.Nom_planteur}</td>
        <td>{item.Pren_planteur}</td>

    </tr>
)

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
            <h2 className="page-header">
                Liste des vendeurs rencontrés
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='9'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={data}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
