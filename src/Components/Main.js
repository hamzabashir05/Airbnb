import React from 'react'
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import "./MainStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './NavBar2';
import Destinations from './Destinations';

 export default function Main() {

   const handleClick = () => {
      
        console.log('');
      };

  return (
   <Container className='m-2  mw-100 '> 
   <div  className='MainText'>
        <a href="#" onClick={handleClick}>
        Learn about Guest Favorites, the most loved homes on Airbnb </a>
    </div>
    <>
    <NavBar/>
    </>
    
    <>
    <NavBar2/>
    </>
 <>
 <Destinations/>
 </>
  </Container>
  )
}
