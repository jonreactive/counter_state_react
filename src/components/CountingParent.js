import React, { Component } from 'react';


class CountParent extends Component {
  
  constructor(props) {
    super(props)
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
  
  handleReset = () => {
    this.setState({
      count:0
    })
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up!</button>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
        
        <hr />
        <p>Some Notes</p>
        <p>Deep merge Vs Shallow Merger</p>
        
        <h1>Deep Merge</h1>
        <p>A "deep merge" would peek into the user object 
            and only update a certain property while leaving the 
            rest alone</p>
          <h1>Shallow Merge</h1>
        <p>A "Shallow merge over writes the whole object with the new one. It won't replace the top-level state, but it will only update one level deep"</p>

      </div>
    )
  }
  
}

export default CountParent