import React from 'react'
import { Container } from 'react-bootstrap';

export default function MainText() {
    const handleClick = () => {
      
        console.log('');
      };

  return (
    <Container className=' mw-100 '>
 <div  className='MainText'>
        <a href="#" onClick={handleClick}>
        Learn about Guest Favorites, the most loved homes on Airbnb </a>
    </div>

    </Container>
  )
}
