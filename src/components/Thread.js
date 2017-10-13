import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import PostItem from './PostItem';

class Thread extends Component {
  constructor(){
    super();
    this.state = {
      Posts: []
    }
  }

  getPostsById(){
    axios.get(`/posts/${this.props.match.params.threadId}`)
    .then((response) =>
      this.setState({Posts: response.data})
    )
    .catch((err) =>
      console.log(err)
    )
  }

  componentWillMount(){
    this.getPostsById()
  }

  componentDidMount(){
    this.getPostsById()
  }

  render() {
      let postItems;
      if(this.state.Posts[1]){
          postItems = this.state.Posts.map(post => {
            return (
                <PostItem key={post.id} post={post} />
          );
          });
      }
    return (
      <div className="Thread">
        <h3>Posts</h3>
        {postItems}
      </div>
    );
  }
}

export default withRouter(Thread);