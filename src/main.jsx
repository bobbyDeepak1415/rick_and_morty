import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import Demo from "./Demo.jsx";
import Demo2 from "./Demo2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Demo2 />
  </StrictMode>
);
