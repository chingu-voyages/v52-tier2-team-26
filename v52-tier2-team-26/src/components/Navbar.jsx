import { FaRegQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='Nav'>
      <h1>App Name</h1>
      <div>
        <FaRegQuestionCircle />
        <Link to="login" className="admin-login">Admin Portal</Link>
      </div>
    </nav>
  )
}

export default Navbar
