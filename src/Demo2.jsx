import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [users, setUsers] = useState([]);

  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        setUsers(response.data.results);
        const uniqueStatuses = new Set(
          Array.from(users.map((user) => user.status)),
        );
      } catch (e) {
        console.log("failed To fetch...", e);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name}:<span>{user.status}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Demo2;
