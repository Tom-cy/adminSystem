import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { HashRouter, Switch, Route } from "react-router-dom";

// 配置页面
import App from "./App/App";
import Admin from "./admin.jsx";
import Common from "./common";

// 一级页面
import Login from "./pages/Login";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Gallery from "./pages/Gallery";
import City from "./pages/City";
import Order from "./pages/Order";
import EmployeeInfo from "./pages/EmployeeInfo";
import EmployeeMan from "./pages/EmployeeMan";

// 二级页面
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Bar from "./pages/echarts/Bar/index";
import Pie from "./pages/echarts/Pie/index";
import Line from "./pages/echarts/Line/index";
import DetailCommon from "./pages/DetailCommon/detail";

export default class router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/common" render={() =>
            <Common>
              <Route path="/common/order/detail/:orderID" component={DetailCommon} />
            </Common>
          }
          />
          <Route
            path="/admin"
            render={() => (
              <Switch>
                <Admin>
                  {/* 一级页面 */}
                  <Route path="/admin/home" component={Home} />
                  <Route path="/admin/employeeinfo" component={EmployeeInfo} />
                  <Route path="/admin/employeeman" component={EmployeeMan} />
                  <Route path="/admin/city" component={City} />
                  <Route path="/admin/order" component={Order} />

                  {/* 二级页面 */}
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/charts/bar" component={Bar} />
                  <Route path="/admin/charts/pie" component={Pie} />
                  <Route path="/admin/charts/line" component={Line} />
                </Admin>
              </Switch>
            )}
          />
        </App>
      </HashRouter>
    );
  }
}
