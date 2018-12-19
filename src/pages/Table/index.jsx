import React, { Component } from "react";
import { Card, Table } from "antd";
import axios from "axios";
export default class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
     
    this.request();
  }
  // 动态的获取数据----------------------------------------
  request = () => {
    let baseUrl =
      "https://www.easy-mock.com/mock/5c19f794bde1915e93ca1b49/chenzs/";
    axios.get(baseUrl + "table/list").then(res => {
      console.log(JSON.stringify(res));
        // 成功得到数据然后进行判断status200 
        if(res.status ===200 && res.data.code === 0){
          this.setState({
            dataSource:res.data.result.list
          });
        }
    });
  };

  render() {
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        render: text => <a href="javascript:void(0);">{text}</a>
      },
      {
        title: "年龄",
        dataIndex: "interset"
      },
      {
        title: "电话",
        dataIndex: "number"
      },
      {
        title: "入职日期",
        dataIndex: "datetime"
      },
      {
        title: "住址",
        dataIndex: "address"
      }
    ];
    return (
      <div>
         
        <Card title="员工表">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            rowSelection={this.state.rowSelection}
          />
        </Card>
      </div>
    );
  }
}
