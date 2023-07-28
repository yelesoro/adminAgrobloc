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

const topCustomers = {
    head: [
        "Nom du vendeur",
        'numéro de la commande',
        'Somme payée'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        },

    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Numéro de commande",
        "Nom du vendeur",
        "Prix payé",
        "Date de commande",
        "statut"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

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
