import { Link } from "react-router-dom";
import { FaSearch} from 'react-icons/fa';
 import {IoMdPerson} from 'react-icons/io'
import {MdShoppingCart} from 'react-icons/md'
import { useState } from "react";
import './header.css'
import {FaTrashAlt} from 'react-icons/fa'
import {GiFruitBowl} from 'react-icons/gi'
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const Header = () => {
    
    const [isOpens, setIsOpens] = useState(false);

    const toggleSearch = () => {setIsOpens(!isOpens);       
};

    const [isOpenp, setIsOpenp] = useState(true);

    const togglepanier = () => {setIsOpenp(!isOpenp);       
};

    return (

            <div>
                <h1>Statut des commandes</h1>
                <header>
                <div className="div1">
                    
                <nav className="navbar">
                    <Link to={'/produits'} className="linkp">EnCoursDeValidation</Link>
                    <Link className="link" to={'/historique'}>Validées</Link>
                    <Link className="link">Livrées</Link>
                </nav>
                </div>

            </header>
            </div>
    );
};

export default Header;