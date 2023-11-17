import React from 'react'
import { Container } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap';

const destinationsData = [
    {
      id: 1,
      location: 'Tulbagh, South Africa',
      images: ['cotia1.webp', 'cotia2.webp'],
      viewCount: 14177,
      dateRange: 'Mar 31 - Apr 25',
      price: 146,
    },
    {
        id: 1,
        location: 'Tulbagh, South Africa',
        images: ['image1.jpg', 'image2.jpg'],
        viewCount: 14177,
        dateRange: 'Mar 31 - Apr 25',
        price: 146,
      },
      {
        id: 1,
        location: 'Tulbagh, South Africa',
        images: ['image1.jpg', 'image2.jpg'],
        viewCount: 14177,
        dateRange: 'Mar 31 - Apr 25',
        price: 146,
      },
      {
        id: 1,
        location: 'Tulbagh, South Africa',
        images: ['image1.jpg', 'image2.jpg'],
        viewCount: 14177,
        dateRange: 'Mar 31 - Apr 25',
        price: 146,
      },
    // Add more destination objects as needed
  ];
  

export default function Rooms() {

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
                viewed {destination.viewCount} Times <br />
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
