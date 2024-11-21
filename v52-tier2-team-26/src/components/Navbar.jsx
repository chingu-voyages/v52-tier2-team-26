import { FaRegQuestionCircle, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    // Using 480px as the window size for mobile devices
  const mobileMenu = window.innerWidth <= 480 ? true : false;

  return (
    <nav className="Nav wrapper">
      <Link to="/" className="site-title">
        <h1>App Name</h1>
      </Link>
      <div className="admin-wrapper">
        {/* TO DO: Add link to icon to FAQ page */}
        <FaRegQuestionCircle />
        {mobileMenu ? (
          <Link to="login">
            <FaUserCircle className="admin-icon" />
          </Link>
        ) : (
          <Link to="login" className="admin-login">
            Admin Portal
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
