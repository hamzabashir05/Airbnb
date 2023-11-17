import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import d1 from '../Assets/dubai.webp';
import d2 from '../Assets/brazil.webp';
import d3 from '../Assets/france.webp';
import d4 from '../Assets/ireland.webp';
import d5 from '../Assets/italy.webp';
import d6 from '../Assets/southafrica.webp';
import d7 from '../Assets/uae.webp';
import d8 from '../Assets/paris.webp';
import d11 from '../Assets/dubai2.webp'
import d22 from '../Assets/brazil2.webp';
import d33 from '../Assets/france2.webp';
import d44 from '../Assets/ireland2.webp';
import d55 from '../Assets/italy2.webp';
import d66 from '../Assets/southafrica2.webp';
import d77 from '../Assets/uae2.webp';
import d88 from '../Assets/paris2.webp';



export default function Destinations() {

    const responsive = {
        superLargeDesktop: {
           breakpoint: { max: 4000, min: 3000 },
           items: 4
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
    <Container responsive={responsive} className='mw-100 m-1' >
<div className='destiDisplay'> 
<div className='destImg' > 
  <Carousel>
    <Carousel.Item>
  <img src={d1}  alt='' />
  </Carousel.Item>
  <Carousel.Item>
  <img src={d11}  alt='' />
  </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  
  <div className='destImg' > 
  <Carousel>
    <Carousel.Item>
    <img src={d2} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d22} alt='' />
    </Carousel.Item>
  </Carousel>
 
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>

  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d3} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d33} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d4} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d44} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d5} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d55} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d6} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d66} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d7} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d77} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <Carousel>
    <Carousel.Item>
    <img src={d8} alt='' />
    </Carousel.Item>
    <Carousel.Item>
    <img src={d88} alt='' />
    </Carousel.Item>
  </Carousel>
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  
  </div>
    </Container>
  )
}
