import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import logo from './logo.svg';


function App() {
  return (
    <div className="col-md-6 offset-3">
       <div>
        <title>Form</title>
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css" />
        <div className="content">
          <div className="row">
            <div className="col-md-6 offset-3">
              <form>
                <div className="form-group">
                  <label htmlFor="nom">Nom:</label>
                  <input type="text" className="form-control" id="nom" name="nom" placeholder="Nom" />
                </div>
                <div className="form-group">
                  <label htmlFor="Prenom">Prénom:</label>
                  <input type="text" className="form-control" id="prenom" name="prenom" placeholder="Prénom" />
                </div>
                <div className="form-group">
                  <label htmlFor="Sexe">Sexe:</label>
                  <select className="form-control">
                    <option value="Féminin">Féminin</option>
                    <option value="Masculin">Masculin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="motdepasse">Mot de Passe:</label>
                  <input type="password" className="form-control" id="motdepasse" name="motdepasse" placeholder="Mot de passe" />
                </div>
                <div className="form-check">
                  <label className="form-chek-label">
                    <input type="checkbox" className="form-check-input" />
                    J'accepte les conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
