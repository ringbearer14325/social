import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { signup } from '../helpers.auth';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class signup extends Component {
     constructor(props) {
     super(props);
          this.state = {
          error: null,
          email: '',
          password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.GitHubSignIn = this.GitHubSignIn.bind(this);
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: ''});
        try {
          await signup(this.state.email), this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

      async githubSignIn() {
        try {
          await signInWithGitHub();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
   
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <h1>
                  sign up to 
                  <link to ="/">Social</link>
              </h1>
              <p>Fill in the form below to create an account</p>
              <div>
                <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
              </div>
              <div>
                <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
              </div>
              <div>
                {this.state.error ? <p>{this.state.error}</p> : null}
                <button type="submit">Sign up</button>
              </div>
              <hr></hr>
              <p>Already have an account? <link to="/login">Login</link></p>
              <button type="button" onClick={this.signInWithGitHub}>
                Sign up with Github
              </button>
          </form>
      </div>
    )
  }
}
