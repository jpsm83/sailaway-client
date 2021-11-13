import React from "react";
import { Route, Switch } from "react-router-dom";
import "./reset.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search/Search";

export default function App() {

  return (
    <div>
      <div className="navbarSticky">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:city/:startDate/:endDate/:numOFGuest" component={Search} />
      </Switch>
      <div>
        <Footer />
      </div>
    </div>
  );
}
