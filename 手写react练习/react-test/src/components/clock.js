import React, { Component } from 'react';
// 测试redux
import store from '../store/counter';
// 函数组件
import Functional from './function'

export default class Clock extends Component {
  constructor(props) {
    super(props)

    this.deleteHandler = this.deleteHandler.bind(this)

    this.state = {
      time: new Date(),
      show: true
    }
  }

  startTime() {
    this.timer = setTimeout(() => {
      this.setState({
        time: new Date()
      })
      this.startTime();
    }, 1000)
  }

  // 组件挂载完成执行
  componentDidMount() {
    this.startTime();
    document.getElementById('testButton').addEventListener('click', this.deleteHandler)

    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  // 组件卸载之前执行
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  // 删除回调 
  deleteHandler() {
    const { show } = this.state;
    this.setState({
      show: !show
    })
    console.log(this.state.show)
  }

  render() {
    const { time, show } = this.state;
    return (
      <div>
        { time.toLocaleTimeString()}
        {/* <button onClick={this.deleteHandler} id="testButton">删除下面的functional组件</button> */}
        <button id="testButton">删除下面的functional组件</button>
        {show ? <Functional /> : null}

        <button onClick={() => store.dispatch({ type: 'ADD' })}>修改redux数据</button>
        <h2>{store.getState()}</h2>
      </div>
    )
  }
}
