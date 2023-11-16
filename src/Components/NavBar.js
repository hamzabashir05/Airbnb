import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/logo.png'


export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className=' position-absolute w-100 ' style={{zIndex:"3"}} >
    <Container className='m-2 mw-100 '>
      <Navbar.Brand href="#home">
      <img src={logo} className='w-25' alt=''/> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " className='bg-light' />
      <Navbar.Collapse id="responsive-navbar-nav" className='NavBarStyling'> 
      <Nav className='m-2 me-auto mw-100'>
           <Nav.Link href="./hotels"className='' >Any&nbsp;Where</Nav.Link>
           <Nav.Link href="./events"className=''>Any&nbsp;Week</Nav.Link>
           <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Add Guests" aria-label="Search"/>
        </form>
         </Nav>
         <Nav className='navRightBtns m-2 me-auto'> 
         <Nav.Link href="#signin"className='m-2' >Airbnb&nbsp;your&nbsp;home</Nav.Link>
         <Nav.Link  href="#globe" className='m-2'><i class="fa-solid fa-globe fa-xl"></i></Nav.Link>
         <Nav.Link  href="#user"> <button className='button-container'>
          <i class="fa-solid fa-bars fa-xl"></i> &nbsp;&nbsp;
          <i class="fa-solid fa-user fa-xl"></i>
          </button> </Nav.Link>
       </Nav>
      </Navbar.Collapse> 
    </Container>
  </Navbar>

  )
}
