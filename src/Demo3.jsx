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

  return (
    <div>
      {step ===
        1(
          <>
            <h2>Step1:Basic Information</h2>

            <input
              value={formData.name}
              placeholder="full name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            ></input>
            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            ></input>
            <button disabled={!isStep1Valid} onClick={() => setStep(2)}>
              Enter
            </button>
          </>,
        )}
    </div>
  );
};

export default Demo3;
