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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Status</td>
            <td>Species</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
