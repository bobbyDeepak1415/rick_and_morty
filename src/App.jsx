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


  const cellStyle={
    padding:"1rem",
    border:"1px solid black"
  }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <table style={{border:"1px solid black",width:"50rem",marginTop:"2rem",height:"80vh"}}>
        <thead style={{backgroundColor:"lightgray"}}>
          <tr>
            <td style={cellStyle}>ID</td>
            <td>Name</td>
            <td>Status</td>
            <td>Species</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.status}</td>
              <td>{user.species}</td>
              <td>{user.gender}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
