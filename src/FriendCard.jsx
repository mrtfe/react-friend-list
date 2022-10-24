// import React from "react";
// import { RandomIdGenerator } from "./RandomIdGenerator";

// const friends = [
//   {
//     id: 123,
//     firstName: "John",
//     lastName: "Smith",
//     age: 32,
//     city: "Kaunas",
//   },
//   {
//     id: 132,
//     firstName: "Maria",
//     lastName: "Hudghes",
//     age: 28,
//     city: "Siauliai",
//   },
//   {
//     id: 112,
//     firstName: "Thomas",
//     lastName: "Muiller",
//     age: 33,
//     city: "Vilnius",
//   },
// ];

// function FriendCard(props) {
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

// export function FriendCard(props) {
//   return (
//     <>
//       {friends.map((friend) => (
//         <div className="card">
//           <div>
//             <p>ID: {friend.id}</p>
//             <p>First Name: {friend.firstName}</p>
//             <p>Last Name: {friend.lastName}</p>
//             <p>Age: {friend.age}</p>
//             <p>City: {friend.city}</p>
//           </div>
//           <button className="delete-btn">Delete</button>
//         </div>
//       ))}
//     </>
//   );
// }
