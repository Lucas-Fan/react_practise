import React, { Component } from 'react'
import logo from "../logo.svg";
import style from "../index.module.css"
import "../index.css";

export default class JsxText extends Component {
	render() {
		// React 类负责逻辑控制，比如修改数据 -> vdom
		// ReactDOM 类负责渲染， vdom -> dom
		// babel-loader 可以转换 jsx -> vdom, React.createElement()
		// <h1>React 真棒</h1> => React.createElement("h1","React真棒")
		// 变量使用
		const name = "React 真棒";
		const user = { firstName: "tom", lastName: "jerry" };
		function formatName(user) {
			return user.firstName + " " + user.lastName;
		}

		const greet = <p>hello,jerry</p>;

		// 由于条件语句或者循环语句不是合法表达式
		const title = name ? <h1>{name}</h1> : null;

		// 数组会作为一组子元素对待
		// 处理循环的方式
		const arr = [1, 2, 3].map(num => <li key={num}>{num}</li>);

		return (
			<div>
				<h1>{name}</h1>
				{/* 条件语句 */}
				{title}
				{/* 函数也是合法表达式 */}
				<p>{formatName(user)}</p>
				{/* jsx也是合法表达式 */}
				{greet}
				{/* 数组处理 */}
				<ul>
					{arr}
				</ul>
				{/* 属性使用：静态值用双引号，动态值用大括号 */}
				{/* class、for关键字要特殊处理 */}
				<img src={logo} alt="logo" style={{ width: 100 }} className={style.img}></img>
			</div>
		);
	}
}
