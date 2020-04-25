// 演示状态管理
import React, { Component, useState, useEffect } from 'react'

// 函数组件状态管理： useState, useEffect
// hooks 只能在 16.8.x 以后使用
function ClockFunc() {
  // 创建状态， useState 返回状态和修改状态的函数所组成的数组
  const [date, setDate] = useState(new Date())

  // 定时器是副作用，需要用到 useEffect
  useEffect(() => {

    const timerId = setInterval(() => {
      // 通过 setState 更新状态
      setDate(new Date())
    }, 1000);

    return () => {
      clearInterval(timerId)
    }
  }, []) // 参数 2 指的是依赖状态，本例中没有依赖状态而且仅执行一次，就放一个空数组

  return (
    <div>
      {date.toLocaleTimeString()}
    </div>
  )
}

// class 组件通过 state 和 setState 维护状态
class Clock extends Component {
  constructor(props) {
    super(props);
    // 初始化状态
    this.state = {
      date: new Date(),
      counter: 0
    }
  }

  componentDidMount() {
    this.setState(
      nextState => {
        console.log(nextState.counter); // 0
        return { counter: nextState.counter + 1 };
      },
      () => {
        console.log(this.state.counter); // 3
      }
    );
    console.log(this.state.counter); // 0
    setTimeout(() => {
      console.log("setTimeout", this.state.counter)
    }, 0);
    this.setState(
      nextState => {
        console.log(nextState.counter); // 0
        return { counter: nextState.counter + 1 };
      },
      () => {
        console.log(this.state.counter); // 3
      }
    );
    console.log(this.state.counter); // 0

    this.setState(
      nextState => {
        console.log(nextState.counter); // 0
        return { counter: nextState.counter + 1 };
      },
      () => {
        console.log(this.state.counter); // 3
      }
    );
    console.log(this.state.counter); // 0

    document.body.addEventListener("click", this.changeValue, false)

    this.timerId = setInterval(() => {
      // 通过 setState 更新状态
      this.setState({
        date: new Date()
      }, () => {
        this.props.change(this.state.date);
      })
    }, 1000);
  }

  changeValue = () => {
    this.setState({ counter: this.state.counter + 1 });
    console.log("原生", this.state.counter)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}


export default function StateMgt() {
  return (
    <div>
      <Clock change={date => console.log(date.toLocaleTimeString())}></Clock>
      <ClockFunc></ClockFunc>
    </div>
  )
}
