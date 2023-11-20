import React , { useRef }from 'react'
import Carousel from 'react-bootstrap/Carousel';
import n1 from '../Assets/n1.jpg'
import { Container, Nav } from 'react-bootstrap';
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

  const scrollContainerRef = useRef(null);

  const scrollImages = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200; // Adjust the scroll amount as needed
      container.scrollLeft += direction * scrollAmount;
    }
  };


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
    <Container  responsive={responsive} className='BarSize mw-100 ' >

        <button className="scroll-buttons" onClick={() => scrollImages(-1)}> <i class="fa-solid fa-arrow-left"></i></button>

        <OverflowScrolling className='overflow-scrolling ' >

        <div className='navImg '> <Nav.Link href="./"><img src={n2} className=' ' alt='' /><p className='fontSize'>Trending</p></Nav.Link> </div>
        <div className='navImg '> <Nav.Link href="./Rooms"><img src={n1} className='' alt='' /> <p className='fontSize'>Rooms</p> </Nav.Link></div>
        <div className='navImg '><Nav.Link href="./Omg1"><img src={n3} className=' ' alt='' /><p className='fontSize'>Omg</p></Nav.Link> </div>
        <div className='navImg '> <Nav.Link href=""><img src={n4} className=' ' alt='' /><p className='fontSize'>Iconic&nbsp;city</p> </Nav.Link></div>
        <div className='navImg '> <img src={n5} className=' ' alt='' /><p className='fontSize'>Amazing&nbsp;View</p> </div>
        <div className='navImg '> <img src={n6} className=' ' alt='' /><p className='fontSize'>CoutrySide</p> </div>
        <div className='navImg '><img src={n7} className=' ' alt='' /><p className='fontSize'>National&nbsp;park</p> </div>
        <div className='navImg '> <img src={n8} className=' ' alt='' /><p className='fontSize'>Camping</p> </div>
        <div className='navImg '> <img src={n9} className=' ' alt='' /><p className='fontSize'>Islands</p> </div>
        <div className='navImg '> <img src={n10} className=' ' alt='' /><p className='fontSize'>Design</p> </div>
        <div className='navImg '> <img src={n11} className=' ' alt='' /><p className='fontSize'>World&nbsp;Top</p> </div>
        <div className='navImg '> <img src={n12} className=' ' alt='' /><p className='fontSize'>Beach</p> </div>
        <div className='navImg '> <img src={n13} className=' ' alt='' /><p className='fontSize'>Castles</p> </div>
        <div className='navImg '> <img src={n14} className=' ' alt='' /><p className='fontSize'>New</p> </div>
        <div className='navImg '> <img src={n15} className=' ' alt='' /> <p className='fontSize'>Lake</p></div>
        <div className='navImg '> <img src={n16} className=' ' alt='' /><p className='fontSize'>Amazing&nbsp;Pool</p> </div>
        

      </OverflowScrolling>

      <button className="scroll-buttons" onClick={() => scrollImages(1)}> <i class="fa-solid fa-arrow-right"></i></button>
  
      <div className='filter m-5'>

        <button className='f1 '>Filters <i class="fa-solid fa-filter fa-xl"></i></button>

        <button className='f2 '>Display&nbsp;total&nbsp;before&nbsp;taxes&nbsp;<i class="fa-solid fa-toggle-on fa-xl"></i></button>
      </div>


    </Container>







  )
}
