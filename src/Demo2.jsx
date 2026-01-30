import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Demo2 = () => {

  const [users,setUsers]=useState([])

  useEffect(()=>{
    const fetchUsers=()=>{
      try{

        const response = axios.get("https://rickandmortyapi.com/api/character");
        const 
      }catch(e){
        console.log("failed To fetch...",e)
      }

    }
  })

  const url = "https://rickandmortyapi.com/api/character";
  return (
    <div>
      Hello
    </div>
  )
}

export default Demo2
