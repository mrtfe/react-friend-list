import React, { useState } from "react";

function App() {
  const [friends, setFriends] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const RandomIdGenerator = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  const handleAddFriendClick = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "" && age !== "" && city !== "") {
      const newFriend = {
        id: RandomIdGenerator(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        city: city,
      };
      setFriends([...friends, newFriend]);
      setFirstName("");
      setLastName("");
      setAge("");
      setCity("");
    }
  };

  const handleDeleteClick = (e) => {
    setFriends(friends.filter((friend) => String(friend.id) !== e.target.id));
  };

  return (
    <>
      <div className="wrapper">
        <h1>Friend List App</h1>
        <form>
          <div>
            <label>First Name</label>
            <input
              placeholder="Vardenis"
              required="required"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              placeholder="Pavardenis"
              required="required"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              placeholder="0"
              required="required"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
          <div>
            <label>City From</label>
            <input
              placeholder="City Name"
              required="required"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <button type="submit" onClick={handleAddFriendClick}>
            Add Friend
          </button>
        </form>
        {friends.length ? (
          <div className="cards-wrapper">
            {friends.map((friend) => (
              <div className="card" key={friend.id}>
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
        ) : (
          <p className="no-friends">You did not add any friends yet...</p>
        )}
      </div>
    </>
  );
}

export default App;
