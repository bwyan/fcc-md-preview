import React, {Component} from 'react';
import TextInput from './TextInput';
import Preview from './Preview';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextInput />
        <Preview />
      </div>
    )
  }
}

export default App;
