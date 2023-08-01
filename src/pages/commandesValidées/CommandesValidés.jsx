import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const StatutCommande = ({ statut }) => {
    let statusText;
  
    if (statut == null || 0 ) {
     
      statusText = "En cours";
      return (
        <div className="">
          <center>
            <p> {statusText}</p>
          </center>
        </div>
      );
   
  };}



const CommandesValidés = () => {
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
                          <th >Actions</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => {
                            if(item.Statut ==null || 0 )
                            return( <tr key={item.Id}>
                            <td>{item.Nom_com}</td>
                            <td>{item.Quan_com} kg</td>
                            <td>{item.Pri_com} frcs cfa</td>
                            <Link to={"/vendeurparcommande"}>
                              
                                <td><StatutCommande statut={item.Statut} /></td>
                              
                            </Link>
                            <td>
                                <tbody>
                                   <Link to="/statut"> <td><button type="button" style={{padding:"14px",borderRadius:"15%",background:"green",color:'white'  }}>valider</button></td></Link>
                                   <Link to="/statut">  <td><button type="button" style={{padding:"14px",borderRadius:"15%",background:"red",color:'white'  }}>Annuler</button></td></Link>
                                  
                                </tbody>
                            </td>
             
    
                          </tr>)
                          else{
                            console.log("statut", item);
                          }
                         
})}
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

export default CommandesValidés