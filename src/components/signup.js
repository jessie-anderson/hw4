import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onNameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signupUser({ email: this.state.email, password: this.state.password, username: this.state.username });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.email}
          placeholder="email"
          onChange={this.onEmailChange}
        />
        <input
          type="text"
          value={this.state.password}
          placeholder="password"
          onChange={this.onPasswordChange}
        />
        <input
          type="text"
          value={this.state.username}
          placeholder="name"
          onChange={this.onNameChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default connect(null, { signupUser })(Signup);
