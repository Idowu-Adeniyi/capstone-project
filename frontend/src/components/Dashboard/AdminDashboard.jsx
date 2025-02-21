import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="form-container">
      <h2>Admin Dashboard</h2>
      <nav>
        <Link to="/worklog-list">
          <button>All Work Logs</button>
        </Link>
        <Link to="/report">
          <button>Generate Report</button>
        </Link>
      </nav>
    </div>
  );
}
