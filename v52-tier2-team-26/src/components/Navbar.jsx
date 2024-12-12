import { FaRegQuestionCircle, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ currentUser, setCurrentUser }) => {
  // Using 480px as the window size for mobile devices
  const isMobileDevice = useMediaQuery({ maxWidth: 480 });
  const navigate = useNavigate();

  const logoutAdmin = () => {
    setCurrentUser("");
    navigate("/");
  };

  return (
    <nav className="Nav wrapper">
      <Link to="/" className="site-title">
        <h1>SolarBooker</h1>
      </Link>
      <div className="admin-wrapper">
        {/* TO DO: Add link to icon to FAQ page */}
        <FaRegQuestionCircle />
        {isMobileDevice ? (
          <Link to={currentUser ? "dashboard" : "login"}>
            <FaUserCircle className="admin-icon" />
          </Link>
        ) : (
          <Link
            to={currentUser ? "dashboard" : "login"}
            className="admin-login"
          >
            Admin Portal
          </Link>
        )}
        {currentUser ? (
          <button className="logout-btn" onClick={logoutAdmin}>
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
