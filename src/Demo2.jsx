import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [users, setUsers] = useState([]);

  const [statuses, setStatuses] = useState([]);

  const [filter, setFilter] = useState("All");

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

        setStatuses([..."All", ...uniqueStatuses]);
      } catch (e) {
        console.log("failed To fetch...", e);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.status === filter);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <select onChange={(e) => setFilter(e.target.value)}>
        {statuses.map((status, index) => {
          return <option key={index}>{status}</option>;
        })}
      </select>

      <ul>
        {filteredUsers.map((user) => {
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
