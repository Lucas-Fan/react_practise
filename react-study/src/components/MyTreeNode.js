import React, { Component } from 'react'

class TreeNode extends Component {

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  };

  get isFolder() {
    return this.props.model.children && this.props.model.children.length;
  };
  toggle = () => {
    if (this.isFolder) {
      this.setState({
        open: !this.state.open
      })
    }
  }

  render() {
    return (
      <ul>
        <li>
          <div onClick={this.toggle}>
            {/* 标题 */}
            {this.props.model.title}
            {/* 有可能显示+-号 */}
            {this.isFolder ? <span>
              {this.state.open ? "-" : "+"}
            </span> : null}
          </div>
          {/* 可能存在子树 */}
          {this.isFolder
            ? (
              <div style={{ display: this.state.open ? "block" : "none" }}>
                {this.props.model.children.map(model => (
                  <TreeNode model={model} key={model.key}></TreeNode>
                ))}
              </div>
            )
            : null}
        </li>
      </ul>
    )
  }
}

export default class MyTreeNode extends Component {
  treeData =
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    };
  render() {
    return (
      <div>
        <TreeNode model={this.treeData}></TreeNode>
      </div>
    )
  }
}
