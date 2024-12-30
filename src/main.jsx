import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
// import './index.css'
// import App from './App.jsx'

import StarRating from "./StarRating";


function Test(){
  const [movieRating, setMovieRating] = useState(0);
  console.log(movieRating)
  return <StarRating color="blue" onSetRating={setMovieRating}/>

}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating size={24} color="red" defaultRating={3} />
    <Test/>
  </StrictMode>
);
