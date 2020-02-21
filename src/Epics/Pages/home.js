import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { simpleAction } from '../../actions/simpleAction'
import { Input } from 'antd'
import { HomeConetent, BodyContent } from './style'
import history from '../../history'

class Home extends Component {
  state = {
    email: 'ashu+interview@enterprisebot.org',
    password: 'Intervi3w'
  }

  handleEmail = e => {
    let val = e.target.value
    this.setState({ email: val }, () => console.log(this.state.email))
  }

  handlePassword = e => {
    let val = e.target.value
    this.setState({ password: val }, () => console.log(this.state.password))
  }

  login = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    axios
      .post(
        `https://test-lbadmin-m.enterprisebot.co/api/v2/adminusers/login?include=user`,
        data,
        {
          headers: headers
        }
      )
      .then(res => {
        console.log(res, 'response for having token')
        console.log(res.data.id)
        this.getSessions(res.data.id)
      //  this.getMessage(res.data.id)
      })
  }

  getSessions = data => {
    const headers = {
      Authorization: data
    }
    axios
      .get(
        `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D`,
        { headers: headers }
      )
      .then(res => {
        // this.props.history.push({
        //   pathname: '/chat',
        //   state: { detail: res }
        // })
        localStorage.setItem('sessionObject', JSON.stringify(res.data));
        this.props.history.push('/chat')

      // const location = { pathname: '/chat', state: { detail: res } } 
      // history.push(location)

        console.log(res, 'response in get for session')
      })
  }

  getMessage = data => {
    const headers = {
      Authorization: data
    }
    axios
      .get(
        `https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions/5dc2c58527247f050cd33d82/botmessage`,
        { headers: headers }
      )
      .then(res => {
        console.log(res, 'response in get for messege')
      })
  }

  render () {
    const { getData, isLoading } = this.props
    const { cardsArray } = this.state
    console.log(getData)
    return (
      <div>
        <HomeConetent>Login Page</HomeConetent>

        <Input placeholder='Enter Email' onChange={this.handleEmail} />
        <Input placeholder='Enter Password' onChange={this.handlePassword} />
        {/* <BodyContent>
          {!isLoading ? <Cards cars={cardsArray} /> : null}
        </BodyContent> */}
        <button onClick={this.login}>Submit</button>
        {/* <pre>{JSON.stringify(this.props)}</pre> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  simpleAction: data => dispatch(simpleAction(data))
})

const mapStateToProps = state => ({
  getData: state.simpleReducer.FirstData,
  isLoading: state.simpleReducer.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
