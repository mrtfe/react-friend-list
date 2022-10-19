import { FriendForm } from "./FriendForm";
import { FriendCard } from "./FriendCard";
import { v4 as uuidv4 } from "uuid";

const friends = [
  { firstName: "John", lastName: "Smith", age: 32, city: "Kaunas" },
  { firstName: "Maria", lastName: "Hudghes", age: 28, city: "Siauliai" },
  { firstName: "Thomas", lastName: "Muiller", age: 33, city: "Vilnius" },
];

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Friend List App</h1>
        <FriendForm />
        <p className="no-friends">You did not add any friends yet...</p>
        <div className="cards-wrapper">
          <FriendCard
            id={uuidv4()}
            firstName={friends[0].firstName}
            lastName={friends[0].lastName}
            age={friends[0].age}
            city={friends[0].city}
          />
          <FriendCard
            id={uuidv4()}
            firstName={friends[1].firstName}
            lastName={friends[1].lastName}
            age={friends[1].age}
            city={friends[1].city}
          />
          <FriendCard
            id={uuidv4()}
            firstName={friends[2].firstName}
            lastName={friends[2].lastName}
            age={friends[2].age}
            city={friends[2].city}
          />
        </div>
      </div>
    </>
  );
}

export default App;
