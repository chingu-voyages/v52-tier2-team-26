import { FaRegQuestionCircle, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  // Using 480px as the window size for mobile devices
  const isMobileDevice = useMediaQuery({ maxWidth: 480 });

  // Check if there is a currentUser in Local Storage
  const currentUserPresent = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUserPresent);

  return (
    <nav className="Nav wrapper">
      <Link to="/" className="site-title">
        <h1>SolarBooker</h1>
      </Link>
      <div className="admin-wrapper">
        {/* TO DO: Add link to icon to FAQ page */}
        <FaRegQuestionCircle />
        {isMobileDevice ? (
          <Link to={currentUserPresent ? "dashboard" : "login"}>
            <FaUserCircle className="admin-icon" />
          </Link>
        ) : (
          <Link to={currentUserPresent ? "dashboard" : "login"} className="admin-login">
            Admin Portal
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
