import React from "react";

export default function User(props) {
  // Get the data passed in from the props
  // Use it in this component

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <p>
        <strong>ID: </strong>
        {props.id}
      </p>
      <p>
        <strong>Title: </strong>
        {props.title}
      </p>
      <p>
        <strong>Body: </strong>
        {props.body}
      </p>
    </div>
  );
}