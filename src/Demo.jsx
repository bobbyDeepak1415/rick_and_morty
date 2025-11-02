import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error && <p>{error}</p>}

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
            {users.map((user) => {
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
