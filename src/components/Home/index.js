// Write your code here

import {Component} from 'react'

import Login from '../Login/index'

import Logout from '../Logout/index'

import Message from '../Message/index'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onClicking = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <Message isLogged={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClick={this.onClicking} />
          ) : (
            <Login onClick={this.onClicking} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
