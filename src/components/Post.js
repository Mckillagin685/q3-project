import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import CommentItem from './CommentItem';
import PostItem from './PostItem';
import axios from 'axios';

class Post extends Component {
  constructor(){
    super();
    this.state = {
      Comments: [],
      Post: []
    }
  }

  getCommentsById(){
    axios.get(`/comments/${this.props.match.params.postId}`)
    .then((response) =>
      this.setState({Comments: response.data})
    )
    .catch((err) =>
      console.log(err)
    )
  }

  getPostById(){
    axios.get(`/post/${this.props.match.params.postId}`)
    .then((response) =>
      this.setState({Post: response.data})
    )
    .catch((err) =>
      console.log(err)
    )
  }

  componentWillMount(){
    this.getCommentsById()
    this.getPostById()
  }

  render() {
      let commentItems;
      let postItem;
      if(this.state.Comments[0]){
          commentItems = this.state.Comments.map(comment => {
            return (
                <CommentItem key={comment.id} comment={comment} />
          );
          });

          postItem = <PostItem key={this.state.Post[0].id} post={this.state.Post[0]} />
      }
    return (
      <div className="Post">
        <h2>Post</h2>
        {postItem}
        <h3>Comments</h3>
        {commentItems}
      </div>
    )
  }
}

export default withRouter(Post);