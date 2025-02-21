import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserDashboard from "./components/Dashboard/UserDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import WorkLogForm from "./components/WorkLogs/WorkLogForm";
import WorkLogList from "./components/WorkLogs/WorkLogList";
import Report from "./components/Reports/Report";

const Header = () => (
  <header>
    <h1>Capstone Project</h1>
    <nav>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/user-dashboard">User Dashboard</Link>
      <Link to="/admin-dashboard">Admin Dashboard</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2024 Capstone Project. All rights reserved.</p>
  </footer>
);

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/worklog-form" element={<WorkLogForm />} />
        <Route path="/worklog-list" element={<WorkLogList />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </>
  );
}
