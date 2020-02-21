import React, { Component } from 'react'
import { List } from 'antd'

let retrievedObject

export default class chat extends Component {
  state = {
    sessionArr: ''
  }

  componentDidMount () {
     retrievedObject = localStorage.getItem('sessionObject')
    //let arr = JSON.parse(JSON.stringify(retrievedObject.data))
    this.setState({ sessionArr: retrievedObject }, () =>
      console.log(this.state.sessionArr, 'sessionArr')
    )
    console.log(retrievedObject, 'this.props.location.state.detail')
  }

  render () {
    const { sessionArr } = this.state
    console.log(sessionArr, 'sessionArr.data in render')
    return (
      <div>
vdf
      </div>
    )
  }
}
