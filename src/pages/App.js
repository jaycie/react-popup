import React, { Component } from 'react';
import '../css/fontAwesome/css/font-awesome.min.css';  //fontAwesome
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <i className='fa fa-user'> 一家用户</i>
        </p>
      </div>
    );
  }
}

export default App;
