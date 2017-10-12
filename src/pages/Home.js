// This page is A.K.A. Threads

import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

class Home extends Component {
  render(){
    const View = () => (
      <div>
        <Route path="/login" render={ () => <LoginForm />}/>
      </div>
    )

    console.log(this.props.match)
    return (
      <div className="Home">
        <p>hi im home.js</p>
        <Nav/>
        <div>
          <Route path={`${this.props.match.url}/login`} exact render={ () => <LoginForm />}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(Home);