import React, { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    setUsers(res.data.results);
  };

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
      }}
    >
      <table
        style={{
          border: "1px solid black",
          width: "50rem",
          marginTop: "2rem",
          height: "80vh",
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
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.status}</td>
                <td style={cellStyle}>{user.gender}</td>
                <td style={cellStyle} >
                  <img style={{objectFit:"contain"}} width="80px" src={user.image}></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
