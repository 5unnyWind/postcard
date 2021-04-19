import React, { Component } from 'react'
import Calendar from '../Calendar/Calendar'
import './Home.css'

export default class Home extends Component {
  state = {
    atHome: true,
    atbtn: 0
  }

  box = React.createRef()
  componentDidMount() {
    // this.hey.current.style.opacity=1

  }

  btn2Click = () => {
    this.setState({ atHome: !this.state.atHome })
    this.setState({ atbtn: 2 })
  }
  btn3Click = () => {
    this.setState({ atHome: !this.state.atHome })
    this.setState({ atbtn: 3 })
  }
  btn1Click = () => {
    this.setState({ atHome: !this.state.atHome })
    this.setState({ atbtn: 1 })
  }

  render() {
    const { atHome, atbtn } = this.state
    return (
      <div>

        {/* box--主页界面盒子 */}
        <div className={("box" + atbtn)} ref={this.box}>

          <span className="musicMsg">BGM</span>

          <button>
            <i className="iconfont music">&#xe60d;</i>
          </button>

          <Calendar></Calendar>

          {/* 按钮1 */}
          <button
            onClick={this.btn1Click}
            className={(atHome || atbtn === 1) ? "btn1" : "btn1N"}>
            <h3 className="btn1h3">「情绪色卡」</h3>
            <p className="btn1p">颜色与温度</p>
          </button>


          {/* 按钮2 */}
          <button
            className={(atHome || atbtn === 2) ? "btn2" : "btn2N"}
            onClick={this.btn2Click}>
            邂逅温度
            </button>

          {/* 按钮3 */}
          <button
            onClick={this.btn3Click}
            className={(atHome || atbtn === 3) ? "btn3" : "btn3N"}>
            音符冷暖
          </button>

          {/* 主页下半部分图文 */}
          <div className={atHome ? "image-text" : "image-textN"}>
            {/* 图文上方的文案 */}
            <span className="decade1">
              十秩峥嵘薪火相传
            </span>
            <br/>
            <span className="decade2">
              百年南大烁石流金
            </span>

            {/* 图文组1 */}
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

            {/* 图文组2 */}
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

            {/* 图文组3 */}
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
            <p></p>
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
