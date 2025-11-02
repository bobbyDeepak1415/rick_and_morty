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

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <table style={{width:"50rem",border:"1px solid black",height:"80vh",marginTop:"1rem"}}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Status</td>
            <td>Gender</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.status}</td>
                <td>{user.gender}</td>
                <td>
                  <img src={user.image}></img>
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
