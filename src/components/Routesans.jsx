// @flow strict

import * as React from 'react';
import Login from '../pages/login/login';
import { Switch, Route} from 'react-router-dom'


function Routesans() {
    return (
        <Switch>
            <Route path='/' exact component={Login}/>

        </Switch>


    )
};

export default Routesans;