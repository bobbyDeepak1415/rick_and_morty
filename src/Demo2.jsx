import React, { useEffect, useState } from "react";

const Demo2 = () => {

  const [users,setUsers]=useState([])
  const [statuses,setStatuses]=useState("All")

  useEffect(()=>{
    const fetchData=()=>{
      
      const res = await axios.get("https://rickandmortyapi.com/api/character");

      const result=res.data.results
      setUsers(result)




    }
  })



  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>Hello</div>
  );
};

export default Demo2;
