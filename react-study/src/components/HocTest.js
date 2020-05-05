import React from 'react'

// Lesson 保证功能单一，它不关心数据来源，只负责显示
function Lesson(props) {
  return (
    <div>
      {props.stage} - {props.title}
    </div>
  )
}

const lessons = [
  { stage: "React", title: "核心API" },
  { stage: "React", title: "组件化1" },
  { stage: "React", title: "组件化2" }
]

// 定义高阶组件 withContent
// 包装后的组件传入参数，根据改变参数获取显示数据
const withContent = Comp => props => {
  const content = lessons[props.idx];
  return <Comp {...content}></Comp>
}

// withLog 高阶组件，能够在组件挂载时输出日志
const withLog = Comp => {
  return class extends React.Component {
    componentDidMount() {
      console.log('didMount', this.props);
    }
    render() {
      return <Comp {...this.props}></Comp>
    }
  }
}

// 包装
const LessonWithContent = withLog(withContent(Lesson));

// 装饰器语法 @withLog
// 先后顺序：从下往上

@withLog
@withContent
class Lesson2 extends React.Component {
  render() {
    return (
      <div>
        {this.props.stage} - {this.props.title}
      </div>
    )
  }
}



export default function HocTest() {
  return (
    <div>
      {[0,0,0].map((item, idx) => (
        <Lesson2 key={idx} idx={idx}></Lesson2>
      ))}
    </div>
  )
}
