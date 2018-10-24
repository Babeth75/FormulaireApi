import React, { Component } from 'react';

import './App.css';
import FormMovie from './FormMovie';

class App extends Component {
  render() {
    return (
      <div>
        <FormMovie title="Insertion de ton film préféré" />
      </div>
    );
  }
}

export default App;
