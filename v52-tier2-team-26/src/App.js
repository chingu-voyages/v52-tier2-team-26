import { UserProvider } from "./contexts/UserContext";
import { RequestProvider } from "./contexts/RequestsContext";
import UserLogin from "./components/UserLogin";
// import NewRequest from "./components/NewRequest";
// import Username from "./Navbar/Username";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Missing from "./components/Missing";
import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard";
import SolarForm from "./components/SolarForm";
import { useEffect, useState } from "react";
import MissingDashboard from "./components/MissingDashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || "");
  // console.log(currentUser);

  // UPDATE LOCAL STORAGE when Current User changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserProvider>
      <RequestProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<UserLogin setCurrentUser={setCurrentUser} />} />
            <Route path="apply" element={<SolarForm />} />
            <Route path="dashboard" element={currentUser ? <Dashboard /> : <MissingDashboard />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </RequestProvider>
    </UserProvider>
  );
}

export default App;