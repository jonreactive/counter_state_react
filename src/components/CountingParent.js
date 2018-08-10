import React, { Component } from 'react';
import Child from 'react';



class CountParent extends Component {
  
  constructor() {
    super()
    this.state = {
      count:0
    }
  }
  
  onClick = () => {
    
    this.setState({
      count: this.state.count + 1
    })
    
    console.log(this.state.count)
    
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up!</button>
      </div>
    )
  }
  
}

export default CountParent