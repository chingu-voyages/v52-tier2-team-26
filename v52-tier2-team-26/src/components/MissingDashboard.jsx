import { Link } from "react-router-dom";
import { IoWarning } from "react-icons/io5";

const MissingDashboard = () => {
  return (
    <main className="MissingDashboard">
      <div className="denial-wrapper">
        <IoWarning />
        <h2>Access Denied</h2>
      </div>
      <p className="admin-warning">
        <b>Access to this page is restricted to LA city hall employees.</b>
      </p>
      <p>
        <Link to="/">Visit our Homepage</Link>
      </p>
    </main>
  );
};

export default MissingDashboard;
