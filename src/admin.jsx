import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
// import Buttons from "./pages/ui/buttons";
// import Modals from "./pages/ui/modals";
// import { Switch  , Route} from "react-router-dom";
// import Home from "./pages/Home";
import "./style/index.less";
import "./te";
export default class Admin extends Component {
  render() {
    // console.log(this.props.children);
    return (
      <div>
        <Row className="container">
          <Col span={3} className="Nav-left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header />
            <Row className="content">
 
                {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
