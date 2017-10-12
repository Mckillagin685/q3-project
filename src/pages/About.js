import React, {Component} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

class About extends Component {
  render(){
    return (
      <div className="About">
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default About;