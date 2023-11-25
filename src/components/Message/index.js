// Write your code here
import {Component} from 'react'

import './index.css'

class Message extends Component {
  state = {isLogged: false}

  render() {
    const {isLogged} = this.state
    return (
      <div>
        {isLogged ? (
          <h1 className="heading">Please Login</h1>
        ) : (
          <h1 className="heading">Welcome User</h1>
        )}
      </div>
    )
  }
}

export default Message
