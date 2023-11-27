import React from 'react'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';
import r1 from '../Assets/cotia1.webp';
import r11 from '../Assets/cotia2.webp';
import r2 from '../Assets/valencia.webp';
import r22 from '../Assets/valencia2.webp';
import r3 from '../Assets/torino.webp';
import r33 from '../Assets/torino2.webp';
import r4 from '../Assets/nantes.webp';
import r44 from '../Assets/nantes2.webp';
import r5 from '../Assets/lyon.webp';
import r55 from '../Assets/lyon2.webp';
import r6 from '../Assets/milan.webp';
import r66 from '../Assets/milan2.webp';
import r7 from '../Assets/malakof.webp';
import r77 from '../Assets/malakof2.webp';
import r8 from '../Assets/edinburg.webp';
import r88 from '../Assets/edinburg2.webp';




const destinationsData = [
    {
      id: 1,
      location: 'Cotia, Brazil',
      images: [r1, r11],
      viewCount: 'Roberta Welness.',
      dateRange: 'Mar 31 - Apr 5',
      price: 46,
    },
    {
        id: 2,
        location: 'Valencia, Spain',
        images: [r2,r22],
        viewCount: 'Sagario Coach.',
        dateRange: 'Apr 20 - Apr 25',
        price: 155,
      },
      {
        id: 3,
        location: 'Torino, Italy',
        images: [r3,r33],
        viewCount: 'Carmela',
        dateRange: 'Jan 31 - feb 5',
        price: 246,
      },
      {
        id: 4,
        location: 'Nantes, France',
        images: [r4,r44],
        viewCount: 'Galwen',
        dateRange: 'Aug 31 - Sep 9',
        price: 546,
      },
      {
        id: 5,
        location: 'Lyon, France',
        images: [r5,r55],
        viewCount: 'Edouard',
        dateRange: 'Nov 27 - Dec 2',
        price: 332,
      },
      {
        id: 6,
        location: 'Milan, Italy',
        images: [r6,r66],
        viewCount: 'Valentina',
        dateRange: 'Sep 30 - Oct 6',
        price: 421,
      },
    
      {
        id: 7,
        location: 'London, Uk',
        images: [r7,r77],
        viewCount: 'Amelia',
        dateRange: 'June 20 - July 1',
        price: 79,
      },
    
      {
        id: 8,
        location: 'Lyon, France',
        images: [r8,r88],
        viewCount: 'Ame',
        dateRange: 'may 31 - june 10',
        price: 267,
      },
    
  ];
  

export default function Rooms() {

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
    <Container  fluid className='px-0 position-relative' >

<div className='destiDisplay'>
        {destinationsData.map((destination) => (
          <div className='destImg' key={destination.id}>
            <Carousel >
              {destination.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img src={image} alt='' />
                  
                </Carousel.Item>
              ))}
            </Carousel>
            <div className='textStyle'>
              <h6>{destination.location}</h6>
              <p>
                Stay With {destination.viewCount} <br />
                {destination.dateRange} <br />
                $ {destination.price} night
              </p>
            </div>
          </div>
        ))}
      </div>
  

        </Container>
  )
}
