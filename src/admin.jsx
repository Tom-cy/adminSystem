import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";
import Home from './pages/Home'
import './style/index.less'
import  './te'
export default class Admin extends Component {
  
  render() {
    return (
      <div>
        <Row className='container'>
          <Col span={4} className='Nav-left'>
            <NavLeft />
          </Col>
          <Col span={20} className='main'>
            <Header />
            <Row className = 'content'>
              <Home></Home>
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}
