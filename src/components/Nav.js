import React, {Component} from 'react';
import LoginButtons from './LoginButtons';
import {Link} from 'react-router-dom';

class Nav extends Component {
  logout(){
    this.props.onLogout()
  }
  render(){
    return (
      <nav>
        <Link to="/" >Home</Link>
        <LoginButtons isLoggedIn={this.props.isLoggedIn} firstName={this.props.firstName} onLogout={this.logout.bind(this)}/>
      </nav>
    )
  }
}

export default Nav;