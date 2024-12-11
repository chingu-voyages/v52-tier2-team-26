// import Dashboard from "./dashboard/Dashboard";
// import { useUser } from "../contexts/UserContext";
import { useState } from "react";
// import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const UserLogin = ({ setCurrentUser }) => {
  // const { login } = useUser();
  const [email, setEmail] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);
  const [showErrMsg, setShowErrMsg] = useState(false);
  // const [user, setUser] = useState(null);
  // const { currentUser, setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  // Grab Admin Emails from .env
  const adminEmails = process.env.REACT_APP_ADMIN_EMAILS;
  console.log(adminEmails);

  // const checkUser = () => {
  //   setUser(localStorage.getItem("currentUser"));
  // };

  // const checkLogin = () => {
  //   if (user) {
  //     setLoggedIn(true);
  //   } else {
  //     setLoggedIn(false);
  //   }
  // };

  // const logOut = () => {
  //   localStorage.setItem("currentUser", null);
  // };

  // console.log(user);

  // console.log(loggedIn);

  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   login(email);
  //   checkUser();
  //   checkLogin();
  // };

  const checkAdminEmail = () => {
    if (adminEmails.includes(email)) {
      setCurrentUser(email);
      navigate("/dashboard"); // show dashboard
    } else {
      setShowErrMsg(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    checkAdminEmail();
  };

  return (
    <div className="user-login-wrapper">
        <main className="AdminLogin">
          <div className="login-wrapper">
            <h2>Login to your account</h2>
            <p>
              Login to view upcoming solar appointments using your{" "}
              <b>city hall employee email address</b>.
            </p>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@cityhall.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {showErrMsg && <p className="login-err-msg">This email does not match a city hall employee email address.</p>}
              <button>Log in</button>
            </form>
            <p className="no-account">
              No account yet? Contact city hall to ask about becoming a
              community partner.
            </p>
            {/* <button onClick={logOut}>Log-out</button> */}
          </div>
        </main>
    </div>
  );
};

export default UserLogin;
