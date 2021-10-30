import React from "react";
import { Route, Switch } from "react-router";
import "./reset.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <div className="navbarSticky">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
}
