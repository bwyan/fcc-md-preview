import React, {Component} from 'react';
import TextInput from './TextInput';
import Preview from './Preview';

import './App.scss';

class App extends Component {
  constructor() {
  	super();

  	this.updateInput = this.updateInput.bind(this);

  	this.state = {
  		markdown: '',
  	}
  }

  updateInput(userInput) {
  	this.setState({ markdown: userInput });
  }

  render() {
    return (
      <div className="App">
        <TextInput updateInput={this.updateInput}/>
        <Preview updateInput={this.updateInput} markdown={this.state.markdown}/>
      </div>
    )
  }
}

export default App;
