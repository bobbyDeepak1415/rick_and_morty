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

  return <div></div>;
};

export default Demo3;
