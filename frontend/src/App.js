import React from "react";

import NavBar from "./Components/NavBar";
import SearchPage from "./Components/Pages/Search";
import HirePage from "./Components/Pages/HirePage";
import UpdatePage from "./Components/Pages/UpdatePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Search" component={SearchPage} />
          <Route path="/Hire" component={HirePage} />
          <Route path="/Modify/:id" component={UpdatePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
