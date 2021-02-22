import React, { Component } from 'react'

function Header() {
  return <h2>header</h2>
}

function Productlist() {
  return (
    <div>
      <h2>我是商品信息</h2>
    </div>
  )
}

function Main() {
  return (
    <div>
      <h2>Main</h2>
      <Productlist></Productlist>
    </div>
  )
}

function Footer() {
  return <h2>Footer</h2>
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
