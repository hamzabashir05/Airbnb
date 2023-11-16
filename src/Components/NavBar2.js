import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import n1 from '../Assets/n1.jpg'
import { Container } from 'react-bootstrap';
import n2 from '../Assets/n2.jpg';
import n3 from '../Assets/n3.jpg';
import n4 from '../Assets/n4.jpg';
import n5 from '../Assets/n5.jpg';
import n6 from '../Assets/n6.jpg';
import n7 from '../Assets/n7.jpg';
import n8 from '../Assets/n8.jpg';
import n9 from '../Assets/n9.jpg';
import n10 from '../Assets/n10.jpg';
import OverflowScrolling from 'react-overflow-scrolling';
import n11 from '../Assets/n11.jpg';
import n12 from '../Assets/n12.jpg';
import n13 from '../Assets/n13.jpg';
import n14 from '../Assets/n14.jpg';
import n15 from '../Assets/n15.jpg';
import n16 from '../Assets/n16.jpg';





export default function NavBar2() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };



  return (
    <Container className='BarSize mw-100 ' >

    <OverflowScrolling className='overflow-scrolling  '>
    <div> <img src={n1} className='Navbar2Img' alt='' /> <p className='fontSize'>Iconic city</p></div>
     <div> <img src={n2} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div><img src={n3} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div> 
     <div> <img src={n4} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n5} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n6} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div><img src={n7} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div> 
     <div> <img src={n8} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n9} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n10} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n11} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n12} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n13} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n14} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
     <div> <img src={n15} className='Navbar2Img ' alt='' /> <p className='fontSize'>Iconic city</p></div>
     <div> <img src={n16} className='Navbar2Img ' alt='' /><p className='fontSize'>Iconic city</p> </div>
    

    </OverflowScrolling>

   

<div className='filter m-5'>

<button className='f1 '>Filters <i class="fa-solid fa-filter fa-xl"></i></button>

<button className='f2 '>Display&nbsp;total&nbsp;before&nbsp;taxes&nbsp;<i class="fa-solid fa-toggle-on fa-xl"></i></button>
</div>


    </Container>
  
    
    
     

 

  )
}
