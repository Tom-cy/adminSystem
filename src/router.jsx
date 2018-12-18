import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App/App";
import Login from "./pages/Login";

import Admin from "./admin.jsx";
import Home from "./pages/Home/index";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Detail from "./pages/Detail";
// import Sock from "./pages/Socket/index";

export default class router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />

            <Route
              path="/"
              render={() => (
                <Switch>
                  <Admin>
                    <Route exact path="/home" component={Home} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                  </Admin>
                </Switch>
              )}
            />
              {/* <Route path="/bikeMap'" component={Sock} /> */}
            <Route path="/order/detail" component={Detail} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
