import React from "react";

export function FriendCard(props) {
  return (
    <div className="card">
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Age: {props.age}</p>
        <p>City: {props.city}</p>
      </div>
      <button className="delete-btn">Delete</button>
    </div>
  );
}
