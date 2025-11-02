import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    setUsers(res.data.results);
  };

  useEffect(() => {
    getData();
  }, []);


  const style={
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    padding:"1rem",
    margin:"auto",
    border:"1px solid black"


  }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      
        {users.map((user, index) => {
          return (
            <table style={{width:"40rem"}}>
              <thead style={style}>
                <tr >
                  <td>Sno.</td>
                  <td>name</td>
                  <td>status</td>
                  <td>species</td>
                  <td>gender</td>
                </tr>
              </thead>
              <tbody style={style}>
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.status}</td>
                  <td>{user.species}</td>
                  <td>{user.gender}</td>
                </tr>
              </tbody>
              
            </table>
          );
        })}
      
    </div>
  );
}

export default App;
