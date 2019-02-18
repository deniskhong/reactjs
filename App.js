import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <SignUpForm handleSubmit={value => console.log(value)} />
      </div >
    );
  }
}

export default App;