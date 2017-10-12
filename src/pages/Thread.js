import React, {Component} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Thread extends Component {
  render(){
    return (
      <div className="Thread">
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default Thread;