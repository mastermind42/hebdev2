import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    axios.get('/test').then(v => console.log(v.data));
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get starteddit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;