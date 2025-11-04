// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// // import Demo from './Demo.jsx'

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//     {/* <Demo/> */}
//   </StrictMode>
// );

let arr1=[0,1,2,2,2,3,4,4,4,2]

function display(arr){

  let k=1

  arr.sort()

  for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
      arr[k]=arr[i]
      k++
    }
  }

  return arr.slice(0,k)

}

console.log(display(arr1))
