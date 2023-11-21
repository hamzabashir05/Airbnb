import React from 'react'
import "./MainStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowMapButton = ({ onClick }) => (
  <button className="show-map-button" onClick={onClick}>
    Show Map <i class="fa-solid fa-map"></i>
  </button>
);
 export default function Main() {

  const handleShowMap = () => {
    // Handle the logic to display the map
    console.log('Show Map clicked');
  };



  
  return (
  

    <div className="home-page">
    
      <ShowMapButton onClick={handleShowMap} />

    </div>
  
  )
}
