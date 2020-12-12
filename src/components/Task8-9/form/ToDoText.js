import React from "react";
import './../index.css'
export default function ToDoText(props) {


  return (
    <div>
     { props.text.name}
     <a className="btn" href ={props.text.text}>visit</a> 
     <button onClick ={()=>{props.deletTask(props.text.id)}}>Delete</button>
    </div>
  );
}
