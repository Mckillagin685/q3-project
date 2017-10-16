import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class PostItem extends Component {

  render() {
    return (
      <li className="Post">
          <Link to={`${this.props.match.url}/post/${this.props.post.id}`}>
            <strong>{this.props.post.title}</strong>
          </Link>
      </li>
    );
  }
}

export default withRouter(PostItem);