import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render(){
    return (
      <div className="Footer">
        <footer>
          <Link to='/home'>Home</Link>
          <br />
          <Link to='/posts'>Posts</Link>
          <br />
          <Link to='/about'>About</Link>
          <br />
          <Link to='/contact'>Contact us</Link>
          <br />
          <Link to='/support'>Support</Link>
        </footer>
      </div>
    )
  }
}

export default Footer;