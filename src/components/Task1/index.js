import React from 'react'

/*export default function Task1() {
  return (
    <div>
      Render here task 1
    </div>
  )
}*/


export default class Name extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      name : ["Boris Britva", "Forest Gamp", "Schindler"] ,
       flag : false,
       key :0
  };
  
  }
  componentDidUpdate(){
      if (this.state.flag == true){
          this.setState({
              flag : false,
              key : this.state.key+1
          });
          console.log(this.state.key)
          };
      }
  
  handleClick = () => {
      if(this.state.key==2)
      {
          this.setState({
              flag : true,
              key : -1
          });
      }
      else{
  
          this.setState({
              flag : true
          });
      }
      };
  
  
  render() {
  return (
  <div>
  <h1 >{this.state.name[this.state.key]}</h1>
  <button onClick={this.handleClick}>Обновить</button>
  </div>
  );
  }
  }