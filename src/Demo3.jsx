import React, { useState } from "react";

const Demo3 = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    terms: false,
  });

  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.role && formData.terms;

  return <div></div>;
};...Demo3.apply.

export default Demo3;
