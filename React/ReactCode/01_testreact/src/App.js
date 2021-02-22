import React, { Component } from 'react'

// 类组件
class App extends Component {
  constructor() {
    super();

    this.state = {
      message: '草莓菠萝'
    }

  }
  render() {
    return (
      <div>
        <h3>你好呀!!!</h3>
        <h1>{this.state.message}</h1>
        {/* <button onclick="btnclick()">点击按钮</button> */}
        <button onClick={this.btnclick}>点击按钮</button>

      </div>
    )
  }

  btnclick() {
    console.log("我被打印廖")
  }
}

// 函数式编程
/*
  函数式编程:
  1.没有this对象
  2.没有内部状态{hooks}
*/
// function App() {
//   return (
//     <div>
//       <h2>我不是药神</h2>
//     </div>
//   )
// }
export default App