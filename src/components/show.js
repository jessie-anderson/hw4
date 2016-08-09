import React, { Component } from 'react';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { updatePost } from '../actions';
// markdown from https://github.com/chjj/marked
import marked from 'marked';

class Show extends Component {
  constructor(props) {
    super(props);

    this.onBodyEditClick = this.onBodyEditClick.bind(this);
    this.onTitleEditClick = this.onTitleEditClick.bind(this);
    this.onTagsEditClick = this.onTagsEditClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderTags = this.renderTags.bind(this);

    this.state = {
      title: '',
      content: '',
      tags: [],
      editingTitle: false,
      editingBody: false,
      editingTags: false,
      hasEdited: false,
    };
  }

  onBodyEditClick() {
    if (!this.state.hasEdited) {
      this.setState({
        title: this.props.post.title,
        content: this.props.post.content,
        tags: this.props.post.tags,
        hasEdited: true,
        editingBody: !this.state.editingBody,
      });
    } else {
      this.setState({
        editingBody: !this.state.editingBody,
      });
    }
  }

  onTitleEditClick() {
    if (!this.state.hasEdited) {
      this.setState({
        title: this.props.post.title,
        content: this.props.post.content,
        tags: this.props.post.tags,
        hasEdited: true,
        editingTitle: !this.state.editingTitle,
      });
    } else {
      this.setState({
        editingTitle: !this.state.editingTitle,
      });
    }
  }

  onTagsEditClick() {
    if (!this.state.hasEdited) {
      this.setState({
        title: this.props.post.title,
        content: this.props.post.content,
        tags: this.props.post.tags,
        hasEdited: true,
        editingTags: !this.state.editingTags,
      });
    } else {
      this.setState({
        editingTags: !this.state.editingTags,
      });
    }
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  onBodyChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  onTagsChange(event) {
    this.setState({
      tags: event.target.value.split(/[ ]+/),
    });
  }

  saveChanges() {
    if (this.state.hasEdited) {
      const post = { title: this.state.title, content: this.state.content, tags: this.state.tags, id: this.props.post._id };
      this.props.updatePost(post);
    }

    this.setState({
      editingTitle: false,
      editingBody: false,
      editingTags: false,
    });
  }

  renderTitle(title) {
    let titleDiv, titleEditText;
    if (this.state.editingTitle) {
      titleDiv = (
        <Textarea
          value={title}
          onChange={this.onTitleChange}
        />
      );
      titleEditText = 'Done Editing';
    } else {
      titleDiv = (
        <div>{title}</div>
      );
      titleEditText = 'Edit Title';
    }
    return (
      <div className="title-field">
        <button onClick={this.onTitleEditClick}>{titleEditText}</button>
        {titleDiv}
      </div>
    );
  }

  renderBody(content) {
    let bodyDiv, bodyEditText;
    if (this.state.editingBody) {
      bodyDiv = (
        <Textarea
          value={content}
          onChange={this.onBodyChange}
        />
      );
      bodyEditText = 'Done Editing';
    } else {
      bodyDiv = (
        <div dangerouslySetInnerHTML={{ __html: marked(content || '') }} />
      );
      bodyEditText = 'Edit Content';
    }
    return (
      <div className="content-field">
        <button onClick={this.onBodyEditClick}>{bodyEditText}</button>
        {bodyDiv}
      </div>
    );
  }

  renderTags(tags) {
    let tagsDiv, tagsText, tagsEditText;
    if (tags === undefined) {
      tagsText = '';
    } else {
      tagsText = '';
      for (let i = 0; i < tags.length; i ++) {
        tagsText = `${tagsText} ${tags[i]}`;
      }
    }
    if (this.state.editingTags) {
      tagsDiv = (
        <Textarea
          value={tagsText}
          onChange={this.onTagsChange}
        />
      );
      tagsEditText = 'Done Editing';
    } else {
      tagsDiv = (
        <div>{tagsText}</div>
      );
      tagsEditText = 'Edit Tags';
    }
    return (
      <div className="tags-field">
        <button onClick={this.onTagsEditClick}>{tagsEditText}</button>
        {tagsDiv}
      </div>
    );
  }

  render() {
    let title, content, tags;
    if (this.props.post == null) {
      return (
        <div>Retrieving Post</div>
      );
    }
    if (!this.state.hasEdited) {
      title = this.props.post.title;
      content = this.props.post.content;
      tags = this.props.post.tags;
    } else {
      title = this.state.title;
      content = this.state.content;
      tags = this.state.tags;
    }
    const titleDiv = this.renderTitle(title);
    const bodyDiv = this.renderBody(content);
    const tagsDiv = this.renderTags(tags);

    return (
      <div className="full-note">
        {titleDiv}
        {bodyDiv}
        {tagsDiv}
        <button onClick={this.saveChanges}>Save Changes</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, { updatePost })(Show);
