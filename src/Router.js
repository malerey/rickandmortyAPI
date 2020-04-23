import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import Personajes from './components/Personajes';
import Ubicaciones from './components/Ubicaciones';
import Episodios from './components/Episodios';


const RouterPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/app' component={App}></Route>
        <Route path='/personajes' component={Personajes}></Route>
        <Route path='/ubicaciones' component={Ubicaciones}></Route>
        <Route path='/episodios' component={Episodios}></Route>
      </Switch>
    </Router>
  );
}

export default RouterPage;