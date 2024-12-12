import Navbar from "./Navbar";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <header className="Header">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </header>
  );
};

export default Header;
