import React, { useEffect, useState } from "react";
import "./App.css";

const mockData = [
  {
    machineId: "M001",
    os: "Windows 10",
    encrypted: false,
    antivirus: "Enabled",
    osUpdated: false,
    lastCheckIn: "2025-05-18 22:45",
  },
  {
    machineId: "M002",
    os: "Ubuntu 22.04",
    encrypted: true,
    antivirus: "Enabled",
    osUpdated: true,
    lastCheckIn: "2025-05-18 21:30",
  },
  {
    machineId: "M003",
    os: "macOS Ventura",
    encrypted: false,
    antivirus: "Disabled",
    osUpdated: true,
    lastCheckIn: "2025-05-18 19:20",
  },
];

const App = () => {
  const [machines, setMachines] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Simulate fetch with mock data
    setTimeout(() => {
      setMachines(mockData);
    }, 1000);
  }, []);

  const filteredMachines = machines.filter((machine) =>
    machine.os.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>System Utility Admin Dashboard</h1>

      <input
        type="text"
        placeholder="Filter by OS..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />

      {machines.length === 0 ? (
        <p className="loading">Loading machine data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Machine ID</th>
              <th>OS</th>
              <th>Encrypted</th>
              <th>Antivirus</th>
              <th>OS Updated</th>
              <th>Last Check-in</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredMachines.map((machine) => {
              const issues = [];
              if (!machine.encrypted) issues.push("Disk Not Encrypted");
              if (machine.antivirus === "Disabled") issues.push("Antivirus Off");
              if (!machine.osUpdated) issues.push("OS Outdated");

              return (
                <tr key={machine.machineId}>
                  <td>{machine.machineId}</td>
                  <td>{machine.os}</td>
                  <td>{machine.encrypted ? "Yes" : "No"}</td>
                  <td>{machine.antivirus}</td>
                  <td>{machine.osUpdated ? "Yes" : "No"}</td>
                  <td>{machine.lastCheckIn}</td>
                  <td className={issues.length ? "issue" : "ok"}>
                    {issues.length ? issues.join(", ") : "OK"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      <footer>© 2025 System Utility Dashboard</footer>
    </div>
  );
};

export default App;
