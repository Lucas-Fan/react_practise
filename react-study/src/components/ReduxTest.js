import React, { Component } from 'react';
// import store from '../store';
import { connect } from "react-redux";
import { add, minus, asyncAdd } from "../store/counter";


// connect 参数1：mapStateToProps = (state) => {return {num: state}}
// 参数2： mapDispatchToProps = dispatch => {return {add: () => dispatch({type: 'add'})}}
// connect 两个任务：
// 1.自动渲染
// 2.映射
@connect(
  state => ({ num: state.counter }),
  {
    add,
    minus,
    asyncAdd
    // 理解为vuex中的action
    // add: (num) => ({type: 'add', payload: num}), // action creator
    // minus: () => ({type: 'minus'}),
    // // 异步的返回的是函数
    // asyncAdd: () => dispatch => {
    //   // 异步调用在这里
    //   setTimeout(() => {
    //     dispatch({type: 'add'})
    //   }, 1000);
    // }
  }
)
class ReduxTest extends Component {
  // componentDidMount() {
  //   // 订阅状态变更
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   })
  // }
  render() {
    return (
      <div>
        {/* {store.getState()} */}
        {this.props.num}
        <div>
          <button onClick={() => this.props.add(2)}>+</button>
          <button onClick={this.props.asyncAdd}>async+</button>
          <button onClick={this.props.minus}>-</button>
        </div>
      </div>
    )
  }
}

export default ReduxTest;
