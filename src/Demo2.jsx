import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [users, setUsers] = useState([]);
  const [statuses, setStatuses] = useState("All");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character");

      const result = res.data.results;
      setUsers(result);

      const uniqueStatuses = Array.from(
        new Set(result.map((user) => user.status)),
      );

      setStatuses(["All", ...uniqueStatuses]);
    };

    fetchData();
  });

  const filteredUsers=

  return <div style={{ height: "100vh", backgroundColor: "slategray" }}>


  </div>;
};

export default Demo2;
