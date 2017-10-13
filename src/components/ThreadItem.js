import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class ThreadItem extends Component {

  render() {
    return (      
      <li className="Thread">
          <Link to={`${this.props.match.url}thread/${this.props.thread.id}`}>
            <strong>{this.props.thread.title}</strong>
          </Link>
      </li>
    );
  }
}

export default withRouter(ThreadItem);
