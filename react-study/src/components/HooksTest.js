import React, { useState, useEffect, useReducer, useContext } from 'react'


// 仅展示水果列表
function FruitList({ fruits, onSetFruit }) {
  return (
    <ul>
      {fruits.map(f => <li key={f} onClick={() => onSetFruit(f)}>{f}</li>)}
    </ul>
  )
}

function FruitAdd(props) {
  // 使用useContext获取上下文
  const {dispatch} = useContext(Context);
  // 输入内容状态及设置内容状态的方法
  const [pname, setpname] = useState("");

  const onAddFruit = e => {
    if (e.key == "Enter") {
      // props.onAddFruit(pname);
      dispatch({ type: 'add', payload: pname });
      setpname("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={pname}
        onChange={e => setpname(e.target.value)}
        onKeyDown={onAddFruit}>
      </input>
    </div>
  )
}

// 添加 fruit 状态维护 fruitReducer
// 理解位vuex里面的mutations
function fruitReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      break;
  }
}

// 创建上下文
const Context = React.createContext();

export default function HooksTest() {
  const [fruit, setFruit] = useState("");
  // 局部状态
  // const [fruits, setfruits] = useState(['香蕉', '芒果', '草莓']);

  // 全局状态
  const [fruits, dispatch] = useReducer(fruitReducer, []);

  // 异步获取水果列表
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'init', payload: ['香蕉', '西瓜'] });
      // setfruits(['香蕉', '西瓜']);
    }, 1000);
  }, []); // 依赖为空只执行一次

  useEffect(() => {
    document.title = fruit;
  }, [fruit]);

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("msg")
    }, 1000);
    return function () {
      clearTimeout(timer);
    }
  }, []);

  // 键盘事件处理

  return (
    <Context.Provider value={{fruits, dispatch}}>
      <div>
        <p>{fruit == "" ? "请选择最喜爱的水果：" : `您的选择是：${fruit}`}</p>
        <FruitAdd></FruitAdd>
        <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList>
      </div>
    </Context.Provider>
  )
}
