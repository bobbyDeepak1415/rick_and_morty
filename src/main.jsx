// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// // import App from "./App.jsx";
// import Demo from "./Demo.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Demo />
//   </StrictMode>
// );

let arr1 = [0, 3, 3, 3, 4, 5, 4, 6, 6, 6];


function display(arr1) {
  let k = 1;
  arr1.sort()
  for (let i =1; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i - 1]) {
      arr1[i]+=1
      k++;
    }
  }

  return [k,arr1]
}

console.log(display(arr1));
