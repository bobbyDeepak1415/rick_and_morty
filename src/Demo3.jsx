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

  const handleClick = () => {};

  return (
    <>
      <div>
        {step === 1 && (
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
          </>
        )}
      </div>
      <div>
        {step === 2 && (
          <>
            <h2>step2:enter your role here</h2>
            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="Plumber">Plumber</option>
              <option value="Engineer">Engineer</option>
              <option value="Fighter">Fighter</option>
            </select>
            <input
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.checked })
              }
              checked={formData.terms}
              type="checkbox"
            />
            <label>Terms and conditions</label>
            <button onClick={() => setStep(1)}>Back</button>

            <button disabled={!isStep2Valid} onClick={handleClick}>
              Enter
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Demo3;
