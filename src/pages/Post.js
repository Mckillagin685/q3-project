import React, {Component} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

class Post extends Component {
  render(){
    return (
      <div className="Post">
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default Post;