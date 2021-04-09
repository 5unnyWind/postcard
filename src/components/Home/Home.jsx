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


        {/* box--主页界面盒子 */}
        <div className="box">

          <span className="musicMsg">来点音乐→</span>

          <button>
            <i className="iconfont music">&#xe60d;</i>
          </button>

          <button className="btn1"></button>
          <button className="btn2"></button>
          <button className="btn3"></button>

          {/* 主页下半部分图文 */}
          <div className="image-text">

            <div className="it1">
              <div className="i1">
                <img className="img1" src="assets/photos/1.jpg" alt="图片1" />
                <div className="mask"></div>
                <h3>图文标题1</h3>
              </div>
              <p className="t1">文章1</p>
              <p>##########################</p>
              <p>##########################</p>
              <p>##########################</p>
            </div>

            <div className="it2">
              <div className="i2">
                <img className="img2" src="assets/photos/2.jpg" alt="图片1" />
                <div className="mask"></div>
                <h3>图文标题2</h3>
              </div>
              <p className="t2">文章2</p>
              <p>##########################</p>
              <p>##########################</p>
              <p>##########################</p>
            </div>

            <div className="it3">
              <div className="i3">
                <img className="img3" src="assets/photos/3.jpg" alt="图片1" />
                <div className="mask"></div>
                <h3>图文标题3</h3>
              </div>
              <p className="t3">文章3</p>
              <p>##########################</p>
              <p>##########################</p>
              <p>##########################</p>
            </div>

          </div>



          {/* 关于我们 */}
          <div className="team">
            <p>开发团队--第六组</p>
          </div>
        </div>


        <div>
          {/* icon--app图标 */}
          <div className="icon">
            <img src="" alt="" />
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
