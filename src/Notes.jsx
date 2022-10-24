import React, { useState } from "react";

// import { FriendForm } from "./FriendForm";
// import { FriendCard } from "./FriendCard";

const FriendForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleAddFriendClick = (e) => {
    e.preventDefault();
    console.log("button clicked");
    return (
      <div className="card">
        <FriendCard
          firstName={firstName}
          lastName={lastName}
          age={age}
          city={city}
        />
        {/* <div>
          <p>ID: {RandomIdGenerator()}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
          <p>City: {city}</p>
        </div> */}
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
};

// export function FriendCard(props) {
//   return (
//     <div className="card">
//       <div>
//         <p>ID: {RandomIdGenerator()}</p>
//         <p>First Name: {props.firstName}</p>
//         <p>Last Name: {props.lastName}</p>
//         <p>Age: {props.age}</p>
//         <p>City: {props.city}</p>
//       </div>
//       <button className="delete-btn">Delete</button>
//     </div>
//   );
// }

const friends = [
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
];

export function FriendCard(props) {
  return (
    <>
      {friends.map((friend) => (
        <div className="card">
          <div>
            <p>ID: {friend.id}</p>
            <p>First Name: {friend.firstName}</p>
            <p>Last Name: {friend.lastName}</p>
            <p>Age: {friend.age}</p>
            <p>City: {friend.city}</p>
          </div>
          <button className="delete-btn">Delete</button>
        </div>
      ))}
    </>
  );
}

// const RandomIdGenerator = () => {
//   return Math.floor(Math.random() * 1000000000);
// };

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Friend List App</h1>
        <FriendForm />
        <p className="no-friends">You did not add any friends yet...</p>
        <div className="cards-wrapper">
          <FriendCard />
        </div>
      </div>
    </>
  );
}

export default App;
