import React from "react";

import NavBar from "./Components/NavBar";
import Search from "./Components/Pages/Search";
import Admit from "./Components/Pages/Admit";
import Update from "./Components/Pages/Update";
import Payment from "./Components/Pages/Payment";
import Lib from "./assets/Lib.jpg";
import "./";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div
      style={{
        height: "800px",
        backgroundImage: `url(${Lib})`,
        backgroundSize: "cover",
      }}
    >
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/Admit" component={Admit} />
          <Route path="/Pay/:id" component={Payment} />
          <Route path="/Modify/:id" component={Update} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
