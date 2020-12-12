import React from "react";

function randomInteger(min, max) {
  let rand = min+0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


export default class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max : props.max,
      min : props.min,
      result: 0
    };
  }
  
  kliker= () =>{
    let rands = randomInteger(this.state.min, this.state.max );
    this.setState({
      result : rands
    }) 
  }
  


  render() {
    //  let rands = randomInteger(this.state.min, this.state.max); 
    
    return (
      <div>
       {this.state.result}
       <button onClick = {this.kliker}>обновить</button>
      </div>
    );
  }
}
