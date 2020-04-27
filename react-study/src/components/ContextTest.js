import React from 'react'

// 1.创建上下文
const Context = React.createContext();

// 2.获取 Provider 和 Consumer
const Provider = Context.Provider;
const Consumer = Context.Consumer;

// withConsumer 高阶组件， 它根据配置返回一个高阶组件
function withConsumer(Consumer) {
  return Comp => props => {
    return <Consumer>{value => <Comp {...value}></Comp>}</Consumer>
  }
}

// 经过 withConsumer(Consumer) 返回的高阶组件包装，Child获得了上下文中的值
const Child = withConsumer(Consumer)(function (props){
  return <div onClick={() => props.add()}>{props.counter}</div>;
})

// function Child(props) {
//   return (
//     <div style={{width: 100, height: 100, backgroundColor: 'red'}} onClick={() => props.add()}>
//       {props.counter}
//     </div>
//   )
// }


export default class ContextTest extends React.Component {
  state = {
    counter: 0
  }

  add = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <Provider value={{counter: this.state.counter, add: this.add}}>
        <Child></Child>
        <Child></Child>
        <Child></Child>
      </Provider>
    )
  }
}
