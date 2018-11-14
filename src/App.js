import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import Hello from "./header";
import './App.css';


library.add(fas,fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
      </div>
    );
  }
}





export default App;
