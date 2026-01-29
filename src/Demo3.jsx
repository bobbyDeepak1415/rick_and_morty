import React, { useState } from "react";

const Demo3 = () => {
  const [page, setPage] = useState(1);

  const [onSubmit,setOnSubmit]=useState(false)

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
          <button disabled={!isPage1Valid} onClick={() => setPage(2)}>
            Enter
          </button>
        </div>
      )}
      {page === 2 && (
        <div>
          <h1>Select Your Role:</h1>
          <select
            onChange={(e) =>
              setUserDetails({ ...userDetails, role: e.target.value })
            }
          >
            <option>Select role</option>
            <option value="plumber">plumber</option>
            <option value="fighter">fighter</option>
            <option value="lawyer">lawyer</option>
          </select>
          <input
            type="checkbox"
            checked={true}
            // *
            onChange={(e) =>
              setUserDetails({ ...userDetails, terms: e.target.checked })
            }
          ></input>
          <button disabled={!isPage2Valid} onClick={()=>onSubmit(true)}>
            Enter
          </button>
        </div>
      )}
    </div>
  );
};

export default Demo3;
