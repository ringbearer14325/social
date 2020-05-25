import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { signup } from '../helpers.auth';

export default class signup extends Component {
     
   
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <h1>
                  sign up to 
                  <link to ="/">Social</link>
              </h1>
          </form>
