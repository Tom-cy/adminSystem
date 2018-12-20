import React, { Component } from "react";
import { Card, Table , Modal } from "antd";
import axios from "../../axios/index";

export default class tab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    // rowSelection object indicates the need for row selection
    // const rowSelection = {
    //   onChange: (selectedRowKeys, selectedRows) => {
    //     console.log(
    //       `selectedRowKeys: ${selectedRowKeys}`,
    //       "selectedRows: ",
    //       selectedRows
    //     );
    //   }
    //   // getCheckboxProps: record => ({
    //   //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
    //   //   name: record.name,
    //   // }),
    // };
    // this.setState({
    //   rowSelection
    // });

    this.request();
  }
  // 动态的获取数据----------------------------------------
  // request = () => {
  //   let baseUrl =
  //     "https://www.easy-mock.com/mock/5c19f794bde1915e93ca1b49/chenzs/";
  //   axios.get(baseUrl + "table/list").then(res => {
  //     console.log(JSON.stringify(res));
  //       // 成功得到数据然后进行判断status200
  //       if(res.status ===200 && res.data.code === 0){
  //         this.setState({
  //           dataSource:res.data.result.list
  //         });
  //       }
  //   });
  // };
  request = () => {
    axios
      .ajax({
        url: "table/list",
        data: {
          params: {
            page: 1
          }
        }
      })
      .then(res => {
        this.setState({
          dataSource: res.result.list
        });
      });
  };

  // 表格交互
  onRowClick = (record, index) => {
    let selectKey = [index];
    Modal.info({
      title:'信息',
      content:(`姓名: ${record.name},年龄: ${record.interset},电话: ${record.number}  ,住址: ${record.address}` )
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id"
      },
      {
        title: "姓名",
        dataIndex: "name",
        render: text => (
          <a href="javascript:void(0)">
            {text}
          </a>
        )
      },
      {
        key: "key",
        // dataIndex: "id"
      },

      {
        title: "年龄",
        dataIndex: "interset"
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex === 2 ? "男" : "女";
        }
      },
      {
        title: "爱好",
        dataIndex: "bbq",
        render(fish) {
          let yu = {
            "1": "咸鱼一条",
            "2": "死鱼一条",
            "3": "活鱼一条",
            "4": "臭鱼一条"
          };
          return yu[fish];
        }
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
    // const selectedRowKeys = this.state.selectedRowKeys;
    // const rowSelection = {
    //   type: "checkbox",
    //   selectedRowKeys
    // };
    return (
      <div>
        <Card title="员工信息表">
          <Table
            columns={columns}
            dataSource={this.state.dataSource}
            // rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}
          />
        </Card>
      </div>
    );
  }
}
