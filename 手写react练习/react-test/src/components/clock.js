import React, { Component } from 'react';

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
      </div>
    )
  }
}
