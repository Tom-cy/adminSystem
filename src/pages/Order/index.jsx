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
export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 定义page
  params = {
    page: 1
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };
  componentDidMount() {
    // 调用方法，加载接口
    this.OrderList();
  }
  // 默认请求接口数据
  OrderList() {
    let _this = this;
    axios
      .ajax({
        url: "order",
        // isShowLoading: false,
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        if (res.code === 0) {
          let list = res.result.item_list.map((item, index) => {
            item.key = index;
            return item;
          });
          this.setState({
            list,
            pagination: Utils.pagination(res, current => {
              _this.params.page = current;
              // _this.requestList();
            })
          });
        }
      });
  }

  // 开通城市OK按钮
  submitCity = () => {
    // const cityInfo =  this.cityForm.props.form.getFieldsValue()
    // console.log(cityInfo)
    axios
      .ajax({
        url: "order",
        data: {
          // params: cityInfo
        }
      })
      .then(res => {
        if (res.code === 0) {
          this.setState({
            // isShowCity : false
          });
          message.success("开通成功");
          this.requestList();
        }
      });
  };
  // 显示开通城市提示框
  OpenOrderdetail = () => {
    let item = this.state.selectedItem;
    console.log();
    if (!item) {
      Modal.info({
        title: "信息",
        content: "请选择一条订单"
      });
      return;
    }
    window.open(`/#/common/order/detail/${item.id}`, "_blank");
  };

  render() {
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn"
      },
      {
        title: "旺旺账号",
        dataIndex: "bike_sn"
      },
      {
        title: "用户名",
        dataIndex: "user_name"
      },
      {
        title: "手机号码",
        dataIndex: "mobile"
      },
      {
        title: "订单里程",
        dataIndex: "distance"
      },
      {
        title: "订单时长",
        dataIndex: "total_time"
      },
      {
        title: "状态",
        dataIndex: "status"
      },
      {
        title: "开始时间",
        dataIndex: "start_time"
      },
      {
        title: "收货时间",
        dataIndex: "end_time"
      },
      {
        title: "订单金额",
        dataIndex: "total_fee"
      }
    ];
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    };
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{ marginTop: 10, marginBottom: 10 }}>
          <Button type="primary" onClick={this.OpenOrderdetail}>
            订单详情
          </Button>
          <Button type="primary" style={{ marginLeft: 20 }}>
            结束订单
          </Button>
        </Card>

        <div className="content-warp">
          <Table
            bordered
            rowSelection={rowSelection}
            dataSource={this.state.list}
            columns={columns}
            pagination={this.state.pagination}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </div>
        {/* <Modal
          title="开通城市"
          visible={this.state.isShowCity}
          onCancel={() => {
            this.setState({
              // isShowCity: false
            });
          }}

          // onOk={this.submitCity}
        >
          <OpencityForm
            wrappedComponentRef={(inst) => {
              this.cityForm = inst;
            }}
          />
        </Modal> */}
      </div>
    );
  }
}
class FilterForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {getFieldDecorator("city_id")(
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("start_time")(
            <DatePicker format="YYYY-MM-DD HH:mm:ss" placeholder="Start" />
          )}
          {getFieldDecorator("end_time")(
            <DatePicker
              style={{ marginLeft: 10 }}
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="end"
            />
          )}
        </FormItem>

        <FormItem style={{ marginLeft: 15 }} label="订单状态">
          {getFieldDecorator("auth_status")(
            <Select style={{ width: 100 }} placeholder="待发货">
              <Option value="">待付款</Option>
              <Option value="1">待发货</Option>
              <Option value="2">待收货</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ margin: "0 20px" }}>
            查询
          </Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create({})(FilterForm);

class OpencityForm extends React.Component {
  render() {
    const OpencityLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 19
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...OpencityLayout}>
          {getFieldDecorator("city_id", {
            initialValue: "1"
          })(
            <Select style={{ width: 90 }}>
              <Option value="">北京市</Option>
              <Option value="1">东京市</Option>
              <Option value="2">南京市</Option>
              <Option value="3">西京市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式" {...OpencityLayout}>
          {getFieldDecorator("op_model", {
            initialValue: "1"
          })(
            <Select style={{ width: 100 }}>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="销售模式" {...OpencityLayout}>
          {getFieldDecorator("user_model", {
            initialValue: "1"
          })(
            <Select style={{ width: 110 }}>
              <Option value="1">实体店</Option>
              <Option value="2">虚拟店</Option>
            </Select>
          )}
        </FormItem>
      </Form>
    );
  }
}
OpencityForm = Form.create({})(OpencityForm);
