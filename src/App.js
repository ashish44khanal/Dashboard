
import React from 'react'
import { HashRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import './css/master.scss';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </HashRouter>
  )
}

export default App

