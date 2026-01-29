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
    <div>
      {page === 1 && (
        <div>
          <h1>Enter your Details:</h1>
          <input
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          ></input>
          <input
          type="email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          ></input>
          <button>Enter</button>
        </div>
      )}
    </div>
  );
};

export default Demo3;
