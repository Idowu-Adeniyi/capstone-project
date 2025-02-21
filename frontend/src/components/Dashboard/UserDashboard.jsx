import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="form-container">
      <h2>User Dashboard</h2>
      <nav>
        <Link to="/worklog-form">
          <button>Add Work Log</button>
        </Link>
        <Link to="/worklog-list">
          <button>View Work Logs</button>
        </Link>
      </nav>
    </div>
  );
}
