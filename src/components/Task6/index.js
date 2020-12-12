/*import React from 'react'

export default function Task3() {
  return (
    <div>
      Render here task 3
    </div>
  )
}
*/
import React, { Component } from "react";
//import User from "./User";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: null,
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch("https://github.com/kkmkkkkk")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ totalReactPackages: [...data] });
      });
  }
er=()=>{
  this.setState({totalReactPackages: 55})
}
  render() {
    
      return (<div>
<button onClick={this.er}>Clik!</button>
      </div>)
      
  
  }
}