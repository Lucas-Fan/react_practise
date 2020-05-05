import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {

  constructor(props) {
    super(props);

    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render() {
    // 将 createPortal 参数1声明的 jsx 挂载到 node 上
    return createPortal((
      <div>
        {this.props.children}
      </div>
    ), this.node)
  }

  // 清理 div
  componentWillUnmount() {
    document.body.removeChild(this.node);
  }
}
