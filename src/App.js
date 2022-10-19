import { FriendForm } from "./FriendForm";
import { FriendCard } from "./FriendCard";
import { RandomIdGenerator } from "./RandomIdGenerator";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Friend List App</h1>
        {/* <RandomIdGenerator /> */}
        <FriendForm />
        <p className="no-friends">You did not add any friends yet...</p>
        <div className="cards-wrapper">
          <FriendCard id={RandomIdGenerator} />
        </div>
      </div>
    </>
  );
}

export default App;
