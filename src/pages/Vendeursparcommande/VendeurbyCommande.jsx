// @flow strict
import Header from "./header/Header.jsx";
import './vendeurparcommande.css'
import {AiTwotoneStar, AiOutlineStar} from 'react-icons/ai'
import {BiStar} from 'react-icons/bi'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import * as React from 'react';

function VendeurbyCommande() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/api/get';
    
        // Appel à l'API avec Axios
        axios.get(apiUrl)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }, []);
    return (
        <div className="container">
            <h1>DETAILS DE LA COMMANDE</h1>
            <div className="bigdiv">

                <div className="review" id="Review">
                    <div className="review_box" >

                    <div className="review_card">
                    <div className="review_profile"> </div><br />

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" >
                            <h2 className="name">Nom Vendeur</h2>
                            <div className="review_social">
                                <BsFacebook className="i"/>
                                <BsWhatsapp className="i"/>
                                <BiPhoneCall className="i"/>
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div>  
                    <div className="review_card">
                    <div className="review_profile"> </div>

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" >
                            <h2 className="name">nomEtud</h2>
                            <div className="review_icon">
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <BiStar className="i" />
                                <AiOutlineStar className="i" />
    
                            </div>
                            <div className="review_social">
                                <BsFacebook className="i"/>
                                <BsWhatsapp className="i"/>
                                <BiPhoneCall className="i"/>
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div> 
                    <div className="review_card">
                    <div className="review_profile"> </div>

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" >
                            <h2 className="name">nomEtud</h2>
                            <div className="review_icon">
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <BiStar className="i" />
                                <AiOutlineStar className="i" />
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div> 
                    <div className="review_card">
                    <div className="review_profile"> </div>

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" >
                            <h2 className="name">nomEtud</h2>
                            <div className="review_icon">
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <BiStar className="i" />
                                <AiOutlineStar className="i" />
    
                            </div>
                            <div className="review_social">
                                <BsFacebook className="i"/>
                                <BsWhatsapp className="i"/>
                                <BiPhoneCall className="i"/>
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div> 
                    <div className="review_card">
                    <div className="review_profile"> </div>

                       
                    <Link className="lien" to={'/priceDefinition'} >
  <div className="review_text" >
                            <h2 className="name">nomEtud</h2>
                            <div className="review_icon">
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <AiTwotoneStar className="i"/>
                                <BiStar className="i" />
                                <AiOutlineStar className="i" />
    
                            </div>
                            <div className="review_social">
                                <BsFacebook className="i"/>
                                <BsWhatsapp className="i"/>
                                <BiPhoneCall className="i"/>
    
                            </div>
                            <div><p>
                                <span>REGION: </span>
                            Lorem <br /><br />
                            <span>INFOS: </span>
                             ipsum dolor sit amet consectetur adipisicing elit. Eos, ab quaerat sapiente optio voluptates impedit cum reprehenderit! Quam est perspiciatis ex pariatur temporibus, omnis reprehenderit animi dolorum? Cumque,<br /><span> QUANTITE DISPONIBLE:</span>
    
                            </p></div>
                            
                        </div></Link>
                        
                    </div>               
  
                </div>

                </div>
                
                
            </div>
            </div>
    );
};

export default VendeurbyCommande;