import React from "react";

export function FriendForm() {
  return (
    <div className="container">
      <form>
        <div>
          <label>First Name</label>
          <input placeholder="Vardenis"></input>
        </div>
        <div>
          <label>Last Name</label>
          <input placeholder="Pavardenis"></input>
        </div>
        <div>
          <label>Age</label>
          <input placeholder="0"></input>
        </div>
        <div>
          <label>City From</label>
          <input placeholder="City Name"></input>
        </div>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}
