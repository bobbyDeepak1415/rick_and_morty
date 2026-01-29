import React, { useState } from "react";

const Demo3 = () => {
  const [page, setPage] = useState(1);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const isPage1Valid = userDetails.name && userDetails.email;
  const isPage2Valid = userDetails.role && userDetails.terms;

  return (
    <div style={{ height: "100vh", backgroundColor: "gray" }}>
      {page === 1 && (
        <div>
          <h1>Enter your details here:</h1>

          <input
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />

          <input
            value={userDetails.email}
            type="email"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <button disabled={!isPage1Valid} onClick={() => setPage(2)}>
            Enter
          </button>
        </div>
      )}
      {page === 2 && (
        <div>
          <h1>Enter your details here:</h1>

          <select
            value={userDetails.role}
            onChange={(e) =>
              setUserDetails({ ...userDetails, role: e.target.value })
            }
          >
            <option>Select Role</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
            <option value="tester">Tester</option>
          </select>

          <input
          type="checkbox"
            checked={userDetails.terms}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.checked })
            }
          />
          <button disabled={!isPage1Valid} onClick={() => setPage(2)}>
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Demo3;
