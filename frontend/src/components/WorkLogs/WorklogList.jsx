import { useEffect, useState } from "react";
import axios from "axios";

export default function WorkLogList() {
  const [logs, setLogs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/worklogs`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLogs(data);
      } catch (err) {
        alert("Failed to fetch work logs");
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="form-container">
      <h2>Work Logs</h2>
      {logs.length ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Hours</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log._id}>
                <td>{log.date.slice(0, 10)}</td>
                <td>{log.hours}</td>
                <td>{log.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No work logs available.</p>
      )}
    </div>
  );
}
