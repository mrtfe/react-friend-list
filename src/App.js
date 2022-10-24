import React, { useState } from "react";

// import { FriendForm } from "./FriendForm";
// import { FriendCard } from "./FriendCard";

function App() {
  const [friends, setFriends] = useState([
    {
      id: 123,
      firstName: "John",
      lastName: "Smith",
      age: 32,
      city: "Kaunas",
    },
    {
      id: 132,
      firstName: "Maria",
      lastName: "Hudghes",
      age: 28,
      city: "Siauliai",
    },
    {
      id: 112,
      firstName: "Thomas",
      lastName: "Muiller",
      age: 33,
      city: "Vilnius",
    },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const RandomIdGenerator = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  const handleAddFriendClick = (e) => {
    e.preventDefault();
    const newFriend = {
      id: RandomIdGenerator(),
      firstName: firstName,
      lastName: lastName,
      age: age,
      city: city,
    };
    setFriends([...friends, newFriend]);
  };

  const handleDeleteClick = (e) => {
    setFriends(friends.filter((friend) => String(friend.id) !== e.target.id));
  };

  return (
    <>
      <div className="wrapper">
        <h1>Friend List App</h1>
        <p className="no-friends">You did not add any friends yet...</p>
        <form>
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
          <button type="submit" onClick={handleAddFriendClick}>
            Add Friend
          </button>
        </form>
        <div className="cards-wrapper">
          {friends.map((friend) => (
            <div className="card">
              <div>
                <p>ID: {friend.id}</p>
                <p>First Name: {friend.firstName}</p>
                <p>Last Name: {friend.lastName}</p>
                <p>Age: {friend.age}</p>
                <p>City: {friend.city}</p>
              </div>
              <button
                className="delete-btn"
                onClick={handleDeleteClick}
                id={friend.id}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
