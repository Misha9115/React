import React from "react";
export default function ToDoText(props) {



  return (
    <div>
      <li   onClick ={()=>{props.deletTask(props.text.id)}}>text={props.text.name}</li>
    </div>
  );
}
