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

  // const logOut = () => {
  //   localStorage.setItem("currentUser", null);
  // };

  // console.log(user);

  // console.log(loggedIn);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(email);
    checkUser();
    checkLogin();
  };

  return (
    <main className="AdminLogin">
        <div className="login-wrapper">
          <h2>Login to your account</h2>
          <p>Login to view upcoming solar appointments using your <b>city hall employee email address</b>.
          </p>
          <form onSubmit={handleLoginSubmit}>
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="john.doe@cityhall.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button>Log in</button>
          </form>
          <p className="no-account">No account yet? Contact city hall to ask about becoming a community partner.</p>
          {/* <button onClick={logOut}>Log-out</button> */}
          {loggedIn === true ? <RequestList /> : false}
        </div>
    </main>
  );
};

export default UserLogin;
