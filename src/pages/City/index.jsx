import React, { Component } from "react";
import { Card, Button, Table, Form, Select, Modal  ,message} from "antd";
import axios from "./../../axios";
// import untils from "./../../untils/untils";

const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends Component {
  state = {
    isShowCity: false
  };
  // 定义page
  params = {
    page: 1
  };
  componentDidMount() {
    // 调用方法，加载接口
    this.requestList();
  }
  // 默认请求接口数据
  requestList = () => {
    axios
      .ajax({
        url: "open_city",
        isShowLoading: false,
        data: {
          params: {
            page: this.params.page
          }
        }
      })
      .then(res => {
        this.setState({
          list: res.result.item_list.map((item, index) => {
            item.key = index;
            return item;
          })
          // pagination: untils.pagination(res, current => {
          //   _this.params.page = current;
          //   _this.requestList();
          // })
        });
      });
  };

  // 开通城市OK按钮
  submitCity = () => {
    const cityInfo =  this.cityForm.props.form.getFieldsValue()
    // console.log(cityInfo)
    axios.ajax({
        url:"city/open",
        data:{
          params: cityInfo
        }
      }).then((res)=>{
        if(res.code ===0){
          this.setState({
            isShowCity : false
          })
          message.success('开通成功')
          this.requestList()
        }
      })

  };
  // 显示开通城市提示框
  handleOpencity = () => {
    this.setState({
      isShowCity: true
    });
  };

  render() {
    const columns = [
      {
        title: "城市ID",
        dataIndex: "id"
      },
      {
        title: "城市名称",
        dataIndex: "name"
      },
      {
        title: "销售模式",
        dataIndex: "model",
        render(op_model) {
          return op_model === 1 ? "虚拟店" : "实体店";
        }
      },
      {
        title: "营运模式",
        dataIndex: "op_model",
        render(op_model) {
          return op_model === 1 ? "自营" : "加盟商";
        }
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name"
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
        render(arr) {
          return arr
            .map(item => {
              return item.user_name;
            })
            .join(",");
        }
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time"
      },
      {
        title: "操作时间",
        dataIndex: "update_time"
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name"
      }
    ];
    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type="primary" onClick={this.handleOpencity}>
            开通城市
          </Button>
        </Card>
        <div>
          <Table
            dataSource={this.state.list}
            columns={columns}
            // pagination={this.state.pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowCity}
          onCancel={() => {
            this.setState({
              isShowCity: false
            });
          }}

          onOk={this.submitCity}
        >
          <OpencityForm
            wrappedComponentRef={(inst) => {
              this.cityForm = inst;
            }}
          />
        </Modal>
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
        <FormItem label="销售模式">
          {getFieldDecorator("mode")(
            <Select style={{ width: 120 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">实体店</Option>
              <Option value="2">虚拟店</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式">
          {getFieldDecorator("op_mode")(
            <Select style={{ width: 80 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="加盟商授权状态">
          {getFieldDecorator("auth_status")(
            <Select style={{ width: 100 }} placeholder="全部">
              <Option value="">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
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
          {
            getFieldDecorator("city_id", {
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
          )
        }
        </FormItem>
      </Form>
    );
  }
}
OpencityForm = Form.create({})(OpencityForm);
