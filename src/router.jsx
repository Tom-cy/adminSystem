import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { HashRouter, Switch, Route } from "react-router-dom";

// 配置页面
import App from "./App/App";
import Admin from "./admin.jsx";

// 一级页面
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Gallery from "./pages/Gallery";
import City from "./pages/City";
import EmployeeInfo from "./pages/EmployeeInfo";
import EmployeeMan from "./pages/EmployeeMan";

// 二级页面
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Bar from "./pages/echarts/Bar/index";
import Pie from "./pages/echarts/Pie/index";
import Line from "./pages/echarts/Line/index";


 

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
                    {/* 一级页面 */}
                    <Route exact path="/home" component={Home} />
                    <Route path="/employeeinfo" component={EmployeeInfo} />
                    <Route path="/employeeman" component={EmployeeMan} />
                    <Route path="/city" component={City} />
                    
                    {/* 二级页面 */}
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
            <Route path="/order/detail" component={Detail} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
