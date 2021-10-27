import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}