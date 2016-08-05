// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts, fetchPost, deletePost } from '../actions';

class Index extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    this.onPostClick = this.onPostClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  onPostClick(id) {
    this.props.fetchPost(id);
  }

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  renderPosts() {
    if ((this.props.posts !== undefined) && (this.props.posts.length !== 0)) {
      let posts = [];
      for (let i = 0; i < this.props.posts.length; i ++) {
        const post = this.props.posts[i];
        const link = `/posts/${post.id}`;
        posts = posts.concat([(
          <div className="post" key={post.id}>
            <div>
              <Link
                to={link}
                className="post-title"
                key={post.id}
                onClick={() => { this.onPostClick(post.id); }}
              >
                {post.title}
              </Link>
            </div>
            <div>
              <button onClick={() => { this.onDeleteClick(post.id); }}>Delete Post</button>
            </div>
          </div>
        )]);
      }
      return (
        <div id="post-container">{posts}</div>
      );
    } else {
      return (
        <div>No posts to show</div>
      );
    }
  }

  render() {
    return this.renderPosts();
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts.all, post: state.posts.post };
};

export default connect(mapStateToProps, { fetchPosts, fetchPost, deletePost })(Index);
