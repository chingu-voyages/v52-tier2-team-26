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
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || ""
  );
  // console.log(currentUser);
  const [addresses, setAddresses] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
        "https://data.lacity.org/api/views/4ca8-mxuh/rows.json"
      );
      const result = await response.json();
      const data = result.data;
      const addressesList = [];

      //gets the first 100 addresses of the 1.03M total
      for (let i = 0; i < 100; i++) {
        addressesList.push({
          addressLine: `${data[i][11]} ${data[i][13]} ${data[i][14]} ${data[i][15]}`,
          lat: `${data[i][19]}`,
          lng: `${data[i][20]}`,
        });
      }
      setAddresses(addressesList);
    } catch (err) {
      console.log("Something went wrong.", err);
    }
  };
  console.log(addresses);

  useEffect(() => {
    fetchAPI();
  }, []);

  // UPDATE LOCAL STORAGE when Current User changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserProvider>
      <RequestProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home addresses={addresses} />} />
            <Route
              path="login"
              element={<UserLogin setCurrentUser={setCurrentUser} />}
            />
            <Route path="apply" element={<SolarForm />} />
            <Route
              path="dashboard"
              element={
                currentUser ? (
                  <Dashboard addresses={addresses} />
                ) : (
                  <MissingDashboard />
                )
              }
            />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </RequestProvider>
    </UserProvider>
  );
}

export default App;
