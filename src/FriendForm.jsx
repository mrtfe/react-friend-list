import React, { useState } from "react";
// import { FriendCard } from "./FriendCard";
import { RandomIdGenerator } from "./RandomIdGenerator";

export function FriendForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleAddFriendClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
    return (
      <div className="card">
        <div>
          <p>ID: {RandomIdGenerator()}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
          <p>City: {city}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleAddFriendClick}>
        <div>
          <label>First Name</label>
          <input
            placeholder="Vardenis"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="Pavardenis"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            placeholder="0"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div>
          <label>City From</label>
          <input
            placeholder="City Name"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Friend</button>
      </form>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}
