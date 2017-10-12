import React, {Component} from 'react';
import LoginButtons from './LoginButtons';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
constructor(){
  super();
  this.state = {
    isLoggedIn: false
  }
}

loggedIn(){
  axios.get('/token')
    .then((response) => {
      this.setState({isLoggedIn: response.data})
    })
    .catch((err) => {
      console.log(err)
    })
}

componentWillMount(){
  this.loggedIn()
}

componentDidMount(){
  this.loggedIn()
}
  render(){
    return (
      <nav>
        <Link to="/" >Home</Link>
        <LoginButtons isLoggedIn={this.state.isLoggedIn} />
      </nav>
    )
  }
}

export default Nav;