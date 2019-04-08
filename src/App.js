import React, { Component } from 'react';
import Brackets from './components/bracket';
import './App.css';

class App extends Component {

  state = {
    brackets: [
      {
        id: 1,
        title: "First",
        winner: false
      },
      {
        id: 2,
        title: "Second",
        winner: true
      },
      {
        id: 3,
        title: "Third",
        winner: false
      },
      {
        id: 4,
        title: "Fourth",
        winner: true
      },
      {
        id: 5,
        title: "Fifth",
        winner: false
      },
      {
        id: 6,
        title: "Sixth",
        winner: true
      },
      {
        id: 7,
        title: "Seventh",
        winner: false
      },
      {
        id: 8,
        title: "Eigth",
        winner: true
      },
      // {
      //   id: 9,
      //   title: "Ninth"
      // },
      // {
      //   id: 10,
      //   title: "Tenth"
      // }
    ]
  }

  render() {
    return (
      <div className="App">
        <Brackets brackets={this.state.brackets} />
      </div>
    );
  }
}

export default App;
