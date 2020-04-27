import React, {useState} from 'react'


// 仅展示水果列表
function FruitList({fruits,onSetFruit}) {
  return (
    <ul>
      {fruits.map(f => <li key={f} onClick={() => onSetFruit(f)}>{f}</li>)}
    </ul>
  )
}

function FruitAdd(props) {
  const [pname, setpname] = useState("");

  const onAddFruit = e => {
    if (e.key == "Enter") {
      props.onAddFruit(pname);
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

export default function HooksTest() {
  const [fruit, setFruit] = useState("");
  const [fruits, setfruits] = useState(['香蕉', '芒果', '草莓']);

  // 键盘事件处理
  
  
  return (
    <div>
      <p>{fruit == "" ? "请选择最喜爱的水果：" : `您的选择是：${fruit}`}</p>
      <FruitAdd onAddFruit={pname => setfruits([...fruits,pname])}></FruitAdd>
      <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList>
    </div>
  )
}
