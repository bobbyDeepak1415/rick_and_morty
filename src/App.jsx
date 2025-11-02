import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      setUsers(res.data.results);
    } catch (error) {
      console.error("trouble fetching data", error);
      return [];
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cellStyle = {
    padding: "1rem",
    border: "1px solid black",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "2rem",
      }}
    >
      <table
        style={{
          width: "40rem",
          borderCollapse: "collapse",
          textAlign: "left",
          border: "1px solid black",
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <td style={cellStyle}>Sno.</td>
            <td style={cellStyle}>name</td>
            <td style={cellStyle}>status</td>
            <td style={cellStyle}>species</td>
            <td style={cellStyle}>gender</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={cellStyle}>{user.id}</td>
              <td style={cellStyle}>{user.name}</td>
              <td style={cellStyle}>{user.status}</td>
              <td style={cellStyle}>{user.species}</td>
              <td style={cellStyle}>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;



