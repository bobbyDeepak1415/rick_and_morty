import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    setUsers(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const cellStyle={
    border:"1px solid black",
    padding:"1rem"

  }

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
          marginTop: "2rem",
          border: "1px solid black",
          width: "70vw",
          height: "70vh",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <td style={cellStyle}>ID</td>
            <td style={cellStyle}>Name</td>
            <td style={cellStyle}>Status</td>
            <td style={cellStyle}>Gender</td>
            <td style={cellStyle}>Image</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.status}</td>
                <td style={cellStyle}>{user.gender}</td>
                <td style={cellStyle}>
                  <img
                    style={{ height: "70px", width: "70px",objectFit:"contain", }}
                    src={user.image}
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
