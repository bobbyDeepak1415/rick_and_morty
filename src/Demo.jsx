import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setUsers(res.data.results);
    } catch (err) {
      setError("trouble fetching data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cellStyle = {
    border: "1px solid black",
    padding: "1rem",
  };

  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.status === filter);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {error && <p>{error}</p>}

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unKnown">unKnown</option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          style={{
            width: "50rem",
            border: "1px solid black",
            height: "80vh",
            marginTop: "1rem",
          }}
        >
          <thead>
            <tr>
              <td style={cellStyle}> ID</td>
              <td style={cellStyle}>Name</td>
              <td style={cellStyle}>Status</td>
              <td style={cellStyle}>Gender</td>
              <td style={cellStyle}>Image</td>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td style={cellStyle}>{user.id}</td>
                  <td style={cellStyle}>{user.name}</td>
                  <td style={cellStyle}>{user.status}</td>
                  <td style={cellStyle}>{user.gender}</td>
                  <td style={cellStyle}>
                    <img style={{ height: "60px" }} src={user.image}></img>
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

export default Demo;
