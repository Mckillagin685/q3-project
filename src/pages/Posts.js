import React, {Component} from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Posts extends Component {
  render(){
    return (
      <div className="Posts">
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default Posts;