
import React, { Component } from "react";
import User from "./User";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalReactPackages: []
   
    };
  }
  componentDidMount() {
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ totalReactPackages: [...data] });
      });
  }

  render() {

    if (this.state.totalReactPackages!=null){
      const todoText =this.state.totalReactPackages.map((e)=>
      { return <User key={e.id} body={e.body} title={e.title} id ={e.id} /> });
    


return (<div>
{todoText}
</div>);
    }
else{

  return null;
}

    

  }
}