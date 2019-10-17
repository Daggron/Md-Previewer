import React from 'react';
import './App.css';
import Textinput from './components/Textinput';
import TextOutput from './components/TextOutput'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      input:''
    }

    this.hadleInput = this.hadleInput.bind(this)
  }

  hadleInput(e){
    this.setState({
      input:e.target.value
    });
    console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Textinput onChange={this.hadleInput.bind(this)} value={this.state.input} />
        <TextOutput value={this.state.input} />
      </div>
    )
  }
}

export default App;
