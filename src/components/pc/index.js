import React, { Component } from "react";
import PcHeader from "./header";
import Home from "./content/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./content/404";
import News from "./content/news";
import Domestic from "./content/domestic";

class PcIndex extends Component {
  render() {
    return (
      <Router>
        <div>
          <PcHeader></PcHeader>

          <div style={{ padding: "20px 50px" }}>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/domestic">
                <Domestic />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default PcIndex;
