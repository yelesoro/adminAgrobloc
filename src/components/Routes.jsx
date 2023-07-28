import React from 'react'
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';


import { Switch, Route} from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard'
import Customers from '../pages/Customers'
import Geographycard from '../pages/geography/geography'
import Login from '../pages/login/login'
import Products from '../pages/Products'
import Statut from '../pages/Statut/Statut';
import VendeurbyCommande from '../pages/Vendeursparcommande/VendeurbyCommande';


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/geographyCard' component = {Geographycard}/>
            <Route path='/products' component = {Products}/>
            <Route path='/commandes/:id' component = {Products}/>
            <Route path='/statut' component ={Statut} ></Route>
            <Route path='/vendeurparcommande' component = {VendeurbyCommande}></Route>
            
            

        </Switch>


    )
}

export default Routes
