import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import store from "../src/store";
import { Provider } from "react-redux";

// console.log(jsx, "jsx");

ReactDOM.render(<Provider store={store}><App title="这是一个title" /></Provider>, document.getElementById("root"))
