import React, { useState, useEffect } from 'react';

function Functional() {
  const [name, setName] = useState('这是默认的名称');


  // 第一个参数相当于lifecycle的componentDidMount，第二个参数相当于componentDidUpdate，return相当于componentDidUnmount
  useEffect(() => {
    const timer = setInterval(() => {
      setName('这是修改过后的名称' + Math.random());
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>function 组件：{name}</div>
  )
}

export default Functional;
