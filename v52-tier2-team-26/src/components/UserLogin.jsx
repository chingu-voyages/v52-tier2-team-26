import RequestList from "./RequestList";
import { useUser } from "../contexts/UserContext";
import { useState } from "react";

const UserLogin = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkUser = () => {
    setUser(localStorage.getItem("currentUser"));
  };

  const checkLogin = () => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const logOut = () => {
    localStorage.setItem("currentUser", null);
  };

  console.log(user);

  console.log(loggedIn);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(email);
    checkUser();
    checkLogin();
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label>Enter Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button>Submit</button>
      </form>
      <button onClick={logOut}>Log-out</button>
      {loggedIn === true ? <RequestList /> : false}
    </div>
  );
};

export default UserLogin;
