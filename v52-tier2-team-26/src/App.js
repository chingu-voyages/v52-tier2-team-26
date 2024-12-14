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
import addressList from "./data/addressList";

function App() {
  // Must keep currentUser state here (not in a Context) in order to conditionally render Dashboard component
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || ""
  );
  // console.log(currentUser);
  // const [addresses, setAddresses] = useState(addressList);

  // const fetchAPI = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://data.lacity.org/api/views/4ca8-mxuh/rows.json"
  //     );
  //     const result = await response.json();
  //     const data = result.data;
  //     const addressesList = [];

  //     for (let i = 0; i < 1000; i++) {
  //       addressesList.push({
  //         addressLine: `${data[i][11]} ${data[i][13]} ${data[i][14]} ${data[i][15]}`,
  //         lat: `${data[i][19]}`,
  //         lng: `${data[i][20]}`,
  //       });
  //     }

  //     setAddresses(addressesList);
  //   } catch (err) {
  //     console.log("Something went wrong.", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  // console.log(addresses);

  // UPDATE LOCAL STORAGE when Current User changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserProvider>
      <RequestProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          >
            <Route index element={<Home />} />
            <Route
              path="login"
              element={<UserLogin setCurrentUser={setCurrentUser} />}
            />
            <Route path="apply" element={<SolarForm />} />
            <Route
              path="dashboard"
              element={
                currentUser ? (
                  <Dashboard addresses={addressList} />
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
