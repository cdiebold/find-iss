import React from "react";
import "./darkness.css";
/**
 * A Component that informs the user if it is day or night over the ISS.
 */
const darkness = props => {
  return (
      <div className="container">
<div className="box">
      <img src={props.iconPath} alt="Sun" />
      <span>{props.text}</span>
    </div>
    <div className="box">
        <p>The International Space Station is moving at close to 28,000 km/h so its location changes really fast! Where is it right now?</p>
    </div>
    <div className="box">
        <h4>Latitude: {props.latitude} </h4>
        <h4>Longitude: {props.longitude} </h4>
    </div>
   
      </div>
    
  );
};
export default darkness;
