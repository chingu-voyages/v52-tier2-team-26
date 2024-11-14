import { UserProvider } from "./contexts/UserContext";
import { RequestProvider } from "./contexts/RequestsContext";
import UserLogin from "./components/UserLogin";
import NewRequest from "./components/NewRequest";
import Username from "./Navbar/Username";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RequestProvider>
          <UserLogin />
          <NewRequest />
        </RequestProvider>
      </UserProvider>
    </div>
  );
}

export default App;
