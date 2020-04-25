import React from 'react'
import JsxText from "./components/JsxText";
import StateMgt from "./components/StateMgt";
import EventHandle from "./components/EventHandle";


// class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<JsxText></JsxText>
// 			</div>
// 		)
// 	}
// }

function App(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<JsxText></JsxText>
			{/* 状态管理 */}
			<StateMgt></StateMgt>
			<EventHandle></EventHandle>
		</div>
	)
}

export default App;
