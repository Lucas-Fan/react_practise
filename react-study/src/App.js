import React from 'react'
import JsxText from "./components/JsxText";
import StateMgt from "./components/StateMgt";
import EventHandle from "./components/EventHandle";
import ContextTest from "./components/ContextTest";
import HocTest from "./components/HocTest"
import Composition from './components/Composition';
import HooksTest from './components/HooksTest';

// import "antd/dist/antd.css";
// import Button from 'antd/lib/button';

import { Button } from "antd";
import KFormTest from './components/KFormTest';
import Dialog from './components/Dialog';
import MyTreeNode from './components/MyTreeNode';
import ReduxTest from './components/ReduxTest';

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
			{/* context传值 */}
			<ContextTest></ContextTest>
			{/* 高阶组件 */}
			<HocTest></HocTest>
			{/* 复合组件 */}
			<Composition></Composition>
			{/* hooks */}
			<HooksTest></HooksTest>
			<Button>antd</Button>
			{/* 表单组件 */}
			<KFormTest></KFormTest>
			{/* Dialog */}
			<Dialog>
				something
			</Dialog>
			{/* tree */}
			<MyTreeNode></MyTreeNode>
			{/* redux */}
			<ReduxTest></ReduxTest>
		</div>
	)
}

export default App;
 