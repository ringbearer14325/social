import React, { Component } from 'react';
import './css/style.css';



class App extends Component {
  constructor() {   
    
   
    this.state = {
      authenticated: false,
      loading: true,
    };
  }


   
  

  render() {
    
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>         
      </div>
  }
};


export default App;
