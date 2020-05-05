import React, { Component } from 'react';
import { Form, Icon, Input, Button } from "antd";
import { render } from 'react-dom';

function kFormCreate(Comp) {
  return class extends Component {

    constructor(props) {
      super(props);

      this.options = {};// 配置项
      this.state = {
        // usernameMessage: '' //校验项错误信息
      };// 表单的值
    }

    // 全局校验
    validateFields = (cb) => {
      // console.log(this.state);
      const rets = Object.keys(this.options).map(field => {
        return this.validateField(field);
      });
      const ret = rets.every(v => v);
      // 将校验结果传出去，并传递数据
      cb(ret, this.state);
    };

    // 单项校验
    validateField = (field) => {
      // 校验规则
      const { rules } = this.options[field];

      // 校验
      // 如果 ret 是 false 校验失败
      const ret = !rules.some(rule => {
        if (rule.required) {
          // 获得校验项的值
          if (!this.state[field]) {
            // 设置错误信息
            // 设置错误信息
            this.setState({
              [field + 'Message']: rule.message
            });
            return true;
          }
        }
        return false;
      });
      // 若校验成功，清理错误信息
      if (ret) {
        this.setState({
          [field + 'Message']: ''
        })
      }
      return ret;
    };

    // 变更处理
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value
      }, () => {
        this.validateField(name);
      })
    }

    getFieldDec = (field, option) => {
      this.options[field] = option;

      return (InputComp) => {
        return (
          <div>
            {
              React.cloneElement(InputComp, {
                name: field, // 控件 name
                value: this.state[field] || '',
                onChange: this.handleChange
              })
            }
            {/* 校验错误信息 */}
            {
              this.state[field + 'Message'] && (
                <p style={{ color: 'red' }}>{this.state[field + 'Message']}</p>
              )
            }
          </div>
        )
      };
    };

    render() {
      return (
        <Comp
          {...this.props}
          getFieldDec={this.getFieldDec}
          validateFields={this.validateFields}>
        </Comp>
      )
    }
  }
}


@kFormCreate
class KFormTest extends Component {
  onLogin = () => {
    this.props.validateFields((isValid, date) => {
      if (isValid) {
        console.log("登录");
      } else {
        alert("校验失败");
      }
    });
  };
  render() {
    const { getFieldDec } = this.props;
    return (
      <div>
        {/* 接受两个参数返回一个装饰器 */}
        {getFieldDec("username", {
          rules: [{ required: true, message: "请输入用户名" }]
        })(<Input type="text"></Input>)}

        {getFieldDec("password", {
          rules: [{ required: true, message: "请输入密码" }]
        })(<Input type="password"></Input>)}
        <Button onClick={this.onLogin}>登录</Button>
      </div>
    )
  };
}

export default KFormTest
