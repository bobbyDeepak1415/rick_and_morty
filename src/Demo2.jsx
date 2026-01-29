import React, { useState } from 'react'

const Demo2 = () => {
   const [step, setStep] = useState(1);
   const [submitted, setSubmitted] = useState(false);

   const [formData, setFormData] = useState({
     name: "",
     email: "",
     role: "",
     terms: false,
   });

   const isStep1Valid = formData.name && formData.email;
   const isStep2Valid = formData.role && formData.terms;

   if (submitted) {
     return (
       <div>
         <h2>Summary</h2>
         <p>
           <b>Name:</b> {formData.name}
         </p>
         <p>
           <b>Email:</b> {formData.email}
         </p>
         <p>
           <b>Role:</b> {formData.role}
         </p>
         <p>
           <b>Terms Accepted:</b> {formData.terms ? "Yes" : "No"}
         </p>
       </div>
     );
   }

   return (
     <div>
       {step === 1 && (
         <>
           <h2>Step 1</h2>

           <input
             placeholder="Full Name"
             value={formData.name}
             onChange={(e) =>
               setFormData({ ...formData, name: e.target.value })
             }
           />

           <input
             type="email"
             placeholder="Email"
             value={formData.email}
             onChange={(e) =>
               setFormData({ ...formData, email: e.target.value })
             }
           />

           <button disabled={!isStep1Valid} onClick={() => setStep(2)}>
             Next
           </button>
         </>
       )}

       {step === 2 && (
         <>
           <h2>Step 2</h2>

           <select
             value={formData.role}
             onChange={(e) =>
               setFormData({ ...formData, role: e.target.value })
             }
           >
             <option value="">Select role</option>
             <option value="Developer">Developer</option>
             <option value="Designer">Designer</option>
             <option value="Manager">Manager</option>
           </select>

           <div>
             <input
               type="checkbox"
               checked={formData.terms}
               onChange={(e) =>
                 setFormData({ ...formData, terms: e.target.checked })
               }
             />
             <span>Accept Terms & Conditions</span>
           </div>

           <button onClick={() => setStep(1)}>Back</button>
           <button disabled={!isStep2Valid} onClick={() => setSubmitted(true)}>
             Submit
           </button>
         </>
       )}
     </div>
   );
}

export default Demo2
