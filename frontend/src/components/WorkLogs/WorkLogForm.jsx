import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WorkLogForm() {
  const [form, setForm] = useState({ date: "", hours: "", description: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/worklogs`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Work log added successfully!");
      navigate("/worklog-list");
    } catch (err) {
      alert("Failed to add work log");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Work Log</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          required
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Hours Worked"
          required
          onChange={(e) => setForm({ ...form, hours: e.target.value })}
        />
        <textarea
          placeholder="Description"
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
