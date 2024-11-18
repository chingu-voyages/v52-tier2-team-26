import { UserProvider } from "./contexts/UserContext";
import { RequestProvider } from "./contexts/RequestsContext";
import UserLogin from "./components/UserLogin";
// import NewRequest from "./components/NewRequest";
// import Username from "./Navbar/Username";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout";
import Missing from "./components/Missing";
import Home from "./components/Home";

function App() {
  return (
    <UserProvider>
      <RequestProvider>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="login" element={<UserLogin />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </RequestProvider>
    </UserProvider >
  );
}

export default App;
