import React from 'react';
import './App.css';
import Textinput from './components/Textinput';
import TextOutput from './components/TextOutput';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

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
        <Title />
        <Textinput onChange={this.hadleInput.bind(this)} value={this.state.input} />
        <Output />
        <Card className="card">
          <CardContent>
            <TextOutput value={this.state.input} />
          </CardContent>
        </Card>
       
      </div>
    )
  }
}


const Title = ()=>{
  return(
    <h1 className="title">
      Markdown Previwer
    </h1>
  )
}

const Output = ()=>{
  return(
    <h1 className="title">
      Output will be displayed in card below
    </h1>
  )
}

export default App;
