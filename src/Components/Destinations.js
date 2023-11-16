import React from 'react'
import { Container } from 'react-bootstrap';
import d1 from '../Assets/dubai.webp';
import d2 from '../Assets/brazil.webp';
import d3 from '../Assets/france.webp';
import d4 from '../Assets/ireland.webp';
import d5 from '../Assets/italy.webp';
import d6 from '../Assets/southafrica.webp';
import d7 from '../Assets/uae.webp';
import d8 from '../Assets/paris.webp';





export default function Destinations() {

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
           breakpoint: { max: 1024, min: 464 },
           items: 2
         },
         mobile: {
           breakpoint: { max: 464, min: 0 },
           items: 1
         }
       };
     



  return (
    <Container responsive={responsive} className='mw-100 m-1' >
<div className='destiDisplay'> 
<div className='destImg' > 
  <img src={d1}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  
  <div className='destImg' > 
  <img src={d2} alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>

  <div className='destImg'> 
  <img src={d3}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <img src={d4}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <img src={d4}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <img src={d5}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <img src={d6}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  <div className='destImg'> 
  <img src={d7}  alt='' />
  <div className='textStyle'>
  <h6>Tulbagh,South Africa</h6> 
  <p>viewed 14177 Times <br/>Mar 31 - Apr 25 <br/>$ 146 night</p></div>
  </div>
  
  </div>
    </Container>
  )
}
