import axios from "axios";
import React, { use, useEffect, useState } from "react";

const Demo2 = () => {
  const [users, setUsers] = useState([]);

  const [filter, setFilter] = useState("All");

  const [statuses, setStatuses] = useState([]);

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

  return <div style={{ height: "100vh", backgroundColor: "slategray" }}></div>;
};

export default Demo2;
