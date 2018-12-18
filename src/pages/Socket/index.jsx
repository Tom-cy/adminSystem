import React, { Component } from 'react'
import Ejs from './ejs/ooo.ejs'

import './ejs/css/reset.css'
import './ejs/css/common.css'
import './ejs/css/index.css'
import './ejs/css/talk_with.css'

import '/ejs/js/sty.js'

export default class Socket extends Component {
  render() {
    return (
      <div>
        <Ejs></Ejs>
      </div>
    )
  }
}
