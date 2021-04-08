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
        <div>
          <div className="icon">

          </div>
        </div>
        
        <div className="hey" ref={this.hey} >
          <h1>Hey,</h1>
          <h1>我是<span>APP</span></h1>
        </div>


      </div>
    )
  }
}
