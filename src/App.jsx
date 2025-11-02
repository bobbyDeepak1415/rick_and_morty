import React, { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setUsers(res.data.results);
    } catch (err) {
      console.error("trouble fetching data", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.status === filter);

  useEffect(() => {
    getData();
  }, []);

  const cellStyle = {
    padding: "1rem",
    border: "1px solid black",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginTop: "1rem", padding: "0.5rem" }}
      >
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            border: "1px solid black",
            width: "50rem",
            marginTop: "2rem",
            height: "80vh",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ backgroundColor: "lightgray" }}>
            <tr>
              <td style={cellStyle}>ID</td>
              <td style={cellStyle}>Name</td>
              <td style={cellStyle}>Status</td>
              <td style={cellStyle}>Gender</td>
              <td style={cellStyle}>Image</td>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td style={cellStyle}>{user.id}</td>
                  <td style={cellStyle}>{user.name}</td>
                  <td style={cellStyle}>{user.status}</td>
                  <td style={cellStyle}>{user.gender}</td>
                  <td style={cellStyle}>
                    <img
                      style={{ objectFit: "contain" }}
                      width="80px"
                      src={user.image}
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
