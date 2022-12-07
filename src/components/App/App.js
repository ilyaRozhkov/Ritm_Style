import './App.css';
import React from 'react';
import { Router, Route} from 'react-router-dom';

import MainPage from '../Main/Main';
import HeaderLine from '../Header/Header';
import Session from '../Session';

export default function App() {
  //<Session/><MainPage/>
return(
  <div className='app'>
    <HeaderLine/>
    <Router>
      <Route path = "/">
        <MainPage/>
      </Route>
      <Route path="/session">
        <Session/>
      </Route>
    </Router>
  </div>
)
}
