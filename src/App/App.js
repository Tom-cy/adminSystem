// 用于搭建Socket



import React, { Component } from 'react';
import './App.less';
class App extends Component {
  render() {
    // console.log(this.props.children)
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
