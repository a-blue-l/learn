import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import styles from './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';

// 测试redux
import store from './store/counter';
// 组件测试
import Clock from './components/clock'

const name = 'Hello, world';
const jsx = (
  <div className={styles.app}>
    <div>{name}</div>
    <img width="100px" src={logo} alt="" />
    <h6>测试组件引入</h6>
    <Clock />
    {/* 复合组件 */}
    <h2>测试复合组件【包含插槽功能】</h2>
  </div>
)

ReactDOM.render(
  jsx,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// store.subscribe(() => {
//   ReactDOM.render(
//     jsx,
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>,
//     document.getElementById('root')
//   );
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
