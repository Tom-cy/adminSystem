import React, { Component } from "react";
import {
  Card,
  Button,
  Table,
  Form,
  Select,
  Modal,
  message,
  DatePicker
} from "antd";
import axios from "./../../axios";
import Utils from "./../../untils/untils";
import moment from "moment";
import "./index.less";
const FormItem = Form.Item;
const Option = Select.Option;

export default class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let orderID = this.props.match.params.orderID;
    // console.log(this.props)
    if (orderID) {
      this.getDataInfo(orderID);
    }
  }
  getDataInfo(orderID) {
    axios
      .ajax({
        url: "order/detail",
        data: {
          params: {
            oderID: orderID
          }
        }
      })
      .then(res => {
        // if (res.code === 0) {
            console.log(res)
        //   this.setState({
        //     orderInfoId: res.result
        //   });
          
        // }
      });
  }

  render() {
    return (
      <div>
        <Card>
          <div id="orderDetailMap">
            <div className="detail-items">
              <div className="item-title">基础信息</div>
              <ul className="detail-form">
                <li>
                  <div className="detail-form-left">用车模式</div>
                  <div className="detail-form-content">
                    {/* {this.state.orderInfoId.} */}
                  </div>
                </li>
                <li>
                  <div className="detail-form-left">订单编号</div>
                  <div className="detail-form-content">
                    {/* {this.state.orderInfoId.order_sn} */}
                  </div>
                </li>
                <li>
                  <div className="detail-form-left">车辆编号</div>
                  <div className="detail-form-content" >
                  {/* {this.state.orderInfoId.bike_sn} */}
                  </div>
                </li>
                <li>
                  <div className="detail-form-left">用户姓名</div>
                  <div className="detail-form-content" >
                  {/* {this.state.orderInfoId.user_name} */}
                  </div>
                </li>
                <li>
                  <div className="detail-form-left">手机号码</div>
                  <div className="detail-form-content">
                  {/* {this.state.orderInfoId.mobile} */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
