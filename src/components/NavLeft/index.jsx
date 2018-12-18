import "./index.less";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import MenuConfig from "../../config/menuConfig";
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
export default class NavLeft extends React.Component {
  // 菜单Will渲染
  componentWillMount() {
    const MenuTree = this.renderSubMenu(MenuConfig);
    this.setState({ MenuTree });
  }

  // 定义渲染方法
  renderSubMenu = data => {
    // console.log(data);

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

  render() {
    return (
      <div>
        <div className="logo">
          <img src="./assets/110.jpg" alt="" />
          <h1>阿嘞嘞</h1>
        </div>
        <Menu theme="dark">
          {/* 这是一个目录 */}
          {this.state.MenuTree}
        </Menu>
        ,
      </div>
    );
  }
}
