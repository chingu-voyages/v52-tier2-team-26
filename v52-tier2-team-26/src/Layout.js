import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ currentUser, setCurrentUser }) => {
  return (
    <div className="App">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
