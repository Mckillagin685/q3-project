import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';

class LoginButtons extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  logout(){
    this.props.onLogout()
  }
  setButtons() {
    if(this.props.isLoggedIn === true){
      return (
        <div>
          <h2>Hello, {this.props.firstName}</h2>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
      )
    }else if (this.props.isLoggedIn === false){
      return (
        <div>
          <Link to={`${this.props.match.url}login`}><button>login</button></Link>
          <Link to={`${this.props.match.url}sign-up`}><button>sign-up</button></Link>
        </div>
      )
    }
  }

  componentWillMount(){
    console.log('component login buttons ran')
  }

  render(){
    return (
      <div className="LoginButtons">
        <p>Hi Im LoginButtons</p>
        {this.setButtons()}
      </div>
    )
  }
}

export default withRouter(LoginButtons);