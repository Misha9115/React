import React from "react";
import ToDoText from "./ToDoText";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        { id :0, name: "sleep" },
        { id : 1, name: "drink" },
        { id : 2, name: "lerning" },],
      item: ""
    };
  }

  ReadValue = (event) => {
    this.setState({
      item: event.target.value
    });
  };

  handleClick = () => {
    this.setState({
      todo: [...this.state.todo, { name: this.state.item }]
      // todo: this.state.todo.concat(this.state.item)
    });
  };
  deletTask = id => {
    const index = this.state.todo.map(e => e.id).indexOf(id);
    var arr = this.state.todo;
    arr.splice(index, 1);
    this.setState({ todo: arr })
  }
  render() {
    console.log(this.state.todo);
    const todoText = this.state.todo.map((e) => < ToDoText key = {e.id} deletTask={()=>this.deletTask(e.id)} text={e} />);
    return (
      <div>
        <input type="text" onInput={this.ReadValue} />
        <button onClick={this.handleClick}>Ввести</button>
        <ul>{todoText}</ul>
      </div>
    );
  }
}
