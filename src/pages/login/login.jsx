// @flow strict

import * as React from "react";


function Login() {
  return (
    
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Rentrer le mail" />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Email</label>
            <input type="password" placeholder="Rentrer le mot de passe" />
          </div>
          <button className="btn btn-success">Login</button>
          <p>Vous etes d'accord avec les termes de sécurité</p>
          <button className="btn btn-default border">Créer un compte</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
