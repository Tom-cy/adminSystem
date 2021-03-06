import React, { Component } from "react";
import { Row, Col } from "antd";
import "./index.less";
import untils from "../../untils/untils";
import axios from "../../axios";
import { connect } from "react-redux";
// import {  }
// import Axios from "axios";
class Header extends Component {
  // 初始化状态数据
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };
  }
  // 定义componentwillMount
  componentWillMount() {
    // 获取时间
    setInterval(() => {
      let time = untils.formateDate(new Date());

      this.setState({
        time
      });
    }, 1000);
    this.getWeatherAPIData();
  }
  // 获取天气---涉及到跨域问题 ---jsonp
  // 通过jsonp插件
  getWeatherAPIData() {
    let city = "北京";
    axios
      .jsonp({
        url:
          "http://api.map.baidu.com/telematics/v3/weather?location=" +
          encodeURIComponent(city) +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
      })
      .then(res => {
        if (res.status === "success") {
          let data = res.results[0].weather_data[0];
          this.setState({
            dayPictureUrl: data.dayPictureUrl,
            weather: data.weather
          });
        }
      });
  }


  
  render() {
    const { menuName } = this.props;
    // 这个是判断天气的
    const menuType = this.props.menuType
    // console.log(menuType)
    return (
      <div className="header">
        <Row>
          {
            menuType?
              <Col span={6} className='logo'>
                <img src='/assets/imgs/logo.png'></img>
                <span>详情页</span>
              </Col>:''
          }
          <Col span={menuType?18:24} className="header-top">
            {/* <img src="" alt="" /> */}
            <span className="welcomeu">欢迎 大哥</span>
            <a className="exit">退出</a>
          </Col>
        </Row>
        {
          menuType? "" :
          <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            {/* { this.props.menuName } */}
            {menuName}
          </Col>
          <Col span={20} className="weather">
            <span className="data">{this.state.time}</span>
            <span className="weather-detail">
              <img src={this.state.dayPictureUrl} alt="" />
              <span className="font">{this.state.weather}</span>
            </span>
          </Col>
        </Row>
        }
            
     
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuName: state.menuName
  };
};
export default connect(mapStateToProps)(Header);
