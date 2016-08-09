import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class New extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      note: {
        title: '',
        content: '',
        tags: [],
      },
    };
  }

  onTitleChange(event) {
    this.setState({
      note: Object.assign({}, this.state.note, { title: event.target.value }),
    });
  }

  onBodyChange(event) {
    this.setState({
      note: Object.assign({}, this.state.note, { content: event.target.value }),
    });
  }

  onTagsChange(event) {
    this.setState({
      note: Object.assign({}, this.state.note, { tags: event.target.value.split(/[ ,]+/) }),
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state.note);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="put title here"
          onChange={this.onTitleChange}
        />
        <input
          type="text"
          value={this.state.content}
          placeholder="put post here"
          onChange={this.onBodyChange}
        />
        <input
          type="text"
          value={this.state.tags}
          placeholder="put tags here"
          onChange={this.onTagsChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default connect(null, { createPost })(New);
