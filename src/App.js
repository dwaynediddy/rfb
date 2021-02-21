import React, { Component } from 'react';
import Result from './components/Result'

import './App.css';

class App extends React.Component {
  constructor(props) {
      super()

      this.state = {
          result: ""
      }
  }
  render() {
      return (
          <div>
              <div className="calculator">
                  <Result result={this.state.result} />
              </div>            
          </div>
      )
  }
}

export default App;
