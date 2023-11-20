import React from 'react'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';
import o1 from '../Assets/pelko.webp';
import o11 from '../Assets/pelko2.webp';
import o2 from '../Assets/drim.webp';
import o22 from '../Assets/drim2.webp';
import o3 from '../Assets/ponta1.webp';
import o33 from '../Assets/ponta2.webp';
import o4 from '../Assets/hua.webp';
import o44 from '../Assets/hua2.webp';
import o5 from '../Assets/terra.webp';
import o55 from '../Assets/terra2.webp';
import o6 from '../Assets/rasnov.webp';
import o66 from '../Assets/rasnov2.webp';
import o7 from '../Assets/mai.webp';
import o77 from '../Assets/mai2.webp';
import o8 from '../Assets/sellano.webp';
import o88 from '../Assets/sellano2.webp';




const destinationsData = [
    {
      id: 1,
      location: 'Pelkosen, Finland',
      images: [o1, o11],
      viewCount: 'Roberta Welness.',
      dateRange: 'Mar 31 - Apr 5',
      price: 46,
    },
    {
      id: 2,
      location: 'Drimnim, Uk',
      images: [o2,o22],
      viewCount: 'Sagario Coach.',
      dateRange: 'Apr 20 - Apr 25',
      price: 155,
    },
    {
      id: 3,
      location: 'Ponta, Portugal',
      images: [o3,o33],
      viewCount: 'Carmela',
      dateRange: 'Jan 31 - feb 5',
      price: 246,
    },
    {
      id: 4,
      location: 'Hua Hin, Thailand',
      images: [o4,o44],
      viewCount: 'Galwen',
      dateRange: 'Aug 31 - Sep 9',
      price: 546,
    },
    {
      id: 5,
      location: 'Terasini, Italy',
      images: [o5,o55],
      viewCount: 'Edouard',
      dateRange: 'Nov 27 - Dec 2',
      price: 332,
    },
    {
      id: 6,
      location: 'Rasnov, Romania',
      images: [o6,o66],
      viewCount: 'Valentina',
      dateRange: 'Sep 30 - Oct 6',
      price: 421,
    },
  
    {
      id: 7,
      location: 'Chiang Mai, Thailand',
      images: [o7,o77],
      viewCount: 'Amelia',
      dateRange: 'June 20 - July 1',
      price: 79,
    },
  
    {
      id: 8,
      location: 'Sellano, Italy',
      images: [o8,o88],
      viewCount: 'Ame',
      dateRange: 'may 31 - june 10',
      price: 267,
    },
  
  ];
  

export default function Omg1() {


    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 800 }, items: 2 },
        mobile: { breakpoint: { max: 800, min: 0 }, items: 1 },
      };
    
  return (
    <Container responsive={responsive} fluid className='px-0 position-relative' >

      <div className='destiDisplay'>
        {destinationsData.map((destination) => (
          <div className='destImg' key={destination.id}>
            <Carousel>
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
