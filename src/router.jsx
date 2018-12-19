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
import Gallery from "./pages/Gallery";
import Table from "./pages/Table";
import Bar from "./pages/echarts/Bar/index";
import Pie from "./pages/echarts/Pie/index";
import Line from "./pages/echarts/Line/index";


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
                    <Route path="/rich" component={Table} />
                    <Route path="/ui/buttons" component={Buttons} />
                    <Route path="/ui/modals" component={Modals} />
                    <Route path="/ui/gallery" component={Gallery} />
                    <Route path="/charts/bar" component={Bar} />
                    <Route path="/charts/pie" component={Pie} />
                    <Route path="/charts/line" component={Line} />
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
