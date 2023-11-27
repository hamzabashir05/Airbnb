import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.png'
import Card from "react-bootstrap/Card";


export default function NavBar() {
  return (
    <Container>
     <div className='nvaBarItemShow searchBar'>
   <Card >
        <Card.Body>
          <Card.Text>
          <i class="fa-solid fa-magnifying-glass"></i>
           &nbsp;&nbsp;&nbsp;Any Where
          </Card.Text>
        </Card.Body>
      </Card>
   </div>
    <div className='hide-on-small-screen position-absolute mw-100'>
    <Navbar collapseOnSelect expand="lg"  style={{zIndex:"3"}} >
      <Navbar.Brand href="#home" className=''>
      <img src={logo} className='w-25' alt=''/> 
      </Navbar.Brand>
    
      <Nav className='NavbarMid'>
           <Nav.Link href="./hotels" >Any&nbsp;Where&nbsp;&nbsp;|</Nav.Link>
           <Nav.Link href="./events">Any&nbsp;Week&nbsp;&nbsp;|</Nav.Link>
          <Nav.Link >
      <input class=" form-control " type="search" placeholder="Add Guests" aria-label="Search"/>
         </Nav.Link>
         </Nav>
         <Nav className=' m-2'> 
         <Nav.Link href="#signin"className='m-2 fontSizeNav' >Airbnb&nbsp;your&nbsp;home</Nav.Link>
         <Nav.Link  href="#globe" className='m-2'><i class="fa-solid fa-globe fa-xl"></i></Nav.Link>
         <Nav.Link  href="#user"> <button className='button-container'>
          <i class="fa-solid fa-bars fa-xl"></i> &nbsp;&nbsp;
          <i class="fa-solid fa-user fa-xl"></i>
          </button> </Nav.Link>
       </Nav>
   
   
  </Navbar>
  </div>
  </Container>
  )
}
