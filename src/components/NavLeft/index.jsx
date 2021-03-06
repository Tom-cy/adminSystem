import "./index.less";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { switchMenu } from "../../pages/redux/action/index";
import axios from '../../axios/index'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class NavLeft extends React.Component {
  
  state ={
    currenKey: ''
  }
  // 菜单Will渲染
  componentWillMount () {
    axios
    .ajax({
      url:'menuList',
      isShowLoading : false
    }).then((res)=>{
      let MenuCon=  res.menuList
      const MenuTree = this.renderSubMenu(MenuCon);
      this.setState({
        // currenKey,
        MenuTree
      });
    })
  }
  getmenu = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false;
    }
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.children.props.children));
    this.setState = {
      currenKey: item.props.eventKey
    };
  }
  // 定义渲染方法
  renderSubMenu = data => {
    // 获取到data数据之后进行map 数组映射
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderSubMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  homeHandleClick = () => {
    const { dispatch } = this.props;
    dispatch(switchMenu("首页"));
    this.setState({
      currentKey: ""
    });
  };
  render() {
    return (
      <div>
        <NavLink to="/home" onClick={this.homeHandleClick}>
          <div className="logo">
            <img src="./assets/110.jpg" alt="" />
            <h1>阿嘞嘞</h1>
          </div>
        </NavLink>
        <Menu
          onClick={this.getmenu}
          selectedKeys={[this.state.currenKey]}
          theme="dark"
        >
          {/* 这是一个目录 */}
          {this.state.MenuTree}
        </Menu>
        ,
      </div>
    );
  }
}
export default connect()(NavLeft);
