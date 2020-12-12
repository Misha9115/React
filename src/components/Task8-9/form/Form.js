import React from "react";
import ToDoText from "./ToDoText";
import './../index.css';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
      {id :0,name:"sleep",text:'https://www.youtube.com'},
      {id :1,name:"drink",text:'https://monsterlessons.com/project/lessons/react-css-komponentyj-podhod'} ],
      name: "",
      text: ""
    };
  }

  ReadValueName = (event) => {
    this.setState({
      name: event.target.value
    });
  };
  ReadValueText = (event) => {
    this.setState({
      text: event.target.value
    });
  };
  handleClick = () => {
    this.setState({
      todo: [...this.state.todo, {name :this.state.name,text :this.state.text}]
    
    });
  };
deletTask = id=>{
  const index= this.state.todo.map(e=>e.id).indexOf(id);
  var arr =this.state.todo;
  arr.splice(index,1);
  this.setState({todo:arr})
}
  render() {
    console.log(this.state.todo);
    const todoText = this.state.todo.map((e) => <ToDoText key={e.id} text={e}  deletTask={()=>this.deletTask(e.id)} />);
    return (
      <div className='form'>
       <div>
        <h5>Site name</h5> 
          <input type="text" onInput={this.ReadValueName} />
         </div>  
         <div>
         <h5>Site url</h5>
       <input type="text" onInput={this.ReadValueText} />
         </div>
        <button  className='bottonEnter' onClick={this.handleClick}>Submit</button>
        {todoText}
      </div>
    );
  }
}
