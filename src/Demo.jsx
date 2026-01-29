import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("All");
  const [statuses, setStatuses] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");

    const result = res.data.results;

    setUsers(result);
    const uniqueStatuses = Array.from(
      new Set(result.map((user) => user.status)),
    );

    setStatuses(["All", ...uniqueStatuses]);
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.status === filter);

  return (
    <div>
      <div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {statuses.map((status, index) => {
            return <option key={index}>{status}</option>;
          })}
        </select>
      </div>
      {filteredUsers.map((user, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            key={index}
          >
            <span>{user.name}</span>
            <span>{user.status}</span>
            <span>
              <img style={{ height: "60px" }} src={user.image}></img>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Demo;
