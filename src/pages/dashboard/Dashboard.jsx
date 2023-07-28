import React, {useEffect, useState} from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../../components/status-card/StatusCard'

import TableDash from '../../components/tableDash/Table'

import Badge from '../../components/badge/Badge'

import statusCards from '../../assets/JsonData/status-card-data.json'

import "./Dashboar.css" 

import "../../components/tableDash/table.css"

const StatutCommande = ({statut})=>{
    let statusText;

  if (statut == 1) {
    statusText = 'Terminé';
    return (
        <div  className='statutT'>
          <center><p >{statusText}</p></center>
        </div>
      );
  } else {
    statusText = 'En cours';
    return (
        <div  className='statutF'>
          <center><p> {statusText}</p></center>
        </div>
      );
  }
    
}

const chartOptions = {
    series: [{
        name: 'Graphe des achats sur la plateforme',
        data: [40,70,20,90,36,80,30,91,60, 40, 38,12 ]
    }, ],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const Dashboard = () => {

    const [data, setData] = useState([]);

  const getDataCommandes = async () => {
    try {
      const apiUrl = "http://192.168.252.74:8082/commande/viewCom.php";
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataCommandes();
  }, []);

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Tableau de bord</h2>
            <div className="row">
                <div className="col-6">
           <Link to="/commandes/index">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                
                                
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                        />
                                </div>
                            ))
                        }
                    </div>
                        </Link>
                     
                </div>
                <div className="col-6">
                    <div className="card full-height" style={{background: "#f4f4e7"}}>
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Historique des commandes reçues</h3>
                        </div>
                        <div className="card__body">
                           <div className='table-container'>
                           <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Nom du produit</th>
                          <th>Quantité commandée</th>
                          <th>Prix de la commande</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.Id}>
                            <td>{item.Nom_com}</td>
                            <td>{item.Quan_com} kg</td>
                            <td>{item.Pri_com} frcs cfa</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>   
                           </div>
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Voir plus</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Etat des commandes récentes</h3>
                        </div>
                        <div className="card__body">
                        <table>
                      <thead>
                        <tr>
                          <th>Nom du produit</th>
                          <th>Quantité commandée</th>
                          <th>Prix de la commande</th>
                          <th>Statut de la commande</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.Id}>
                          <td>{item.Nom_com}</td>
                          <td>{item.Quan_com} kg</td>
                          <td>{item.Pri_com} frcs cfa</td>
                          <td><StatutCommande statut={item.Statut}/></td>
                        
                            

                        </tr>
                        ))}
                      </tbody>
                    </table>
                        </div>
                        <div className="card__footer">
                            <Link to='/'>voir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
