import { FriendForm } from "./FriendForm";
import { FriendCard } from "./FriendCard";

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
