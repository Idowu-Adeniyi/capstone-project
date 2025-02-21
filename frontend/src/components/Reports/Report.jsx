import { useEffect, useState } from "react";
import axios from "axios";

export default function Report() {
  const [report, setReport] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/worklogs/report`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setReport(data);
      } catch (err) {
        alert("Failed to fetch report");
      }
    };
    fetchReport();
  }, []);

  return (
    <div className="form-container">
      <h2>Work Hours Report</h2>
      {report.length ? (
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {report.map((entry) => (
              <tr key={entry.user}>
                <td>{entry.user}</td>
                <td>{entry.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
