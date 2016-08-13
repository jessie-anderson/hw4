import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      name: '',
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

  onSubmit(event) {
    event.preventDefault();
    this.props.signinUser({ email: this.state.email, password: this.state.password });
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
        <input type="submit" />
      </form>
    );
  }
}

export default connect(null, { signinUser })(Signin);
