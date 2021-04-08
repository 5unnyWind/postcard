import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  hey = React.createRef()

  componentDidMount() {
    console.log(this.hey.current.style)
    // this.hey.current.style.opacity=1
  }
  render() {
    return (
      <div>
        {/* box--主页界面背景 */}
        <div className="box">
          <span className="musicMsg">来点音乐→</span>
          <button>
            <i className="iconfont music">&#xe60d;</i>
          </button>

          <button className="btn1"></button>
          <button className="btn2"></button>
          <button className="btn3"></button>
        </div>


        <div>
          {/* icon--app图标 */}
          <div className="icon">
            <img src="" alt=""/>
            <h2 className="appName">APP</h2>
          </div>
        </div>

        {/* hey--欢迎语 */}
        <div className="hey" ref={this.hey} >
          <h1>Hey,</h1>
          <h1>我是<span>APP</span></h1>
        </div>


      </div>
    )
  }
}
