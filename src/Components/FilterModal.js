import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export default function FilterModal(props) {

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
  
    const handleSliderChange = (event) => {
      const { name, value } = event.target;
  
      if (name === 'minPrice') {
        setMinPrice(parseInt(value, 10));
      } else if (name === 'maxPrice') {
        setMaxPrice(parseInt(value, 10));
      }
    };




    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    }

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!isChecked);
    };
  return (
    <Modal  size="xl" {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
   <h5> Filters</h5>
    </Modal.Header>
    <Modal.Body className="">
      <Container >
        <Row>
            <h4>Type of place</h4>
            <p>Search rooms, entire homes, or any type of place.</p>
          <Col md={12} className=''>
         <Button>Any Type</Button>   
         <Button>Room</Button>
         <Button>Entire Home</Button>
          </Col>
          </Row>
          <Row>
            <h4>Price range</h4>
            <p>Nightly prices before fees and taxes</p>
          <Col md={12}>
          <div>
      <h2>Price Range Chart</h2>

      <div>
        <label htmlFor="minPrice">Min Price: ${minPrice}</label>
        <input
          type="range"
          id="minPrice"
          name="minPrice"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleSliderChange}
        />
      </div>

      <div>
        <label htmlFor="maxPrice">Max Price: ${maxPrice}</label>
        <input
          type="range"
          id="maxPrice"
          name="maxPrice"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={handleSliderChange}
        />
      </div>

      <div>
        <h6> ${minPrice} - ${maxPrice}</h6>
        {/* Display your price range chart or update UI based on the selected range */}
      </div>
    </div>
          
          </Col>
        </Row>
        <Row>
            <h4>Rooms and beds</h4>
            <p>Bedrooms</p>
            <Col md={12}>
                <Button>Any</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
                <Button>8+</Button>
            </Col>
            <p>Beds</p>
            <Col md={12}>
                <Button>Any</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
                <Button>8+</Button>
            </Col>
            <p>Bathrooms</p>
            <Col md={12}>
                <Button>Any</Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
                <Button>8+</Button>
            </Col>
        </Row>
        <Row>
        <h4>Top-tier stays</h4>
            <Col md={6}>
               <Button>
               <i class="fa-solid fa-crown"></i>
               <h5>Guest Favourites</h5>
               <p>The most loved homes on Airbnb,</p>
               <p>according to Guests</p>
               </Button>
            </Col>
        </Row>
        <Row>
            <h4>Property type</h4>
            <Col md={9}>
            <Button>
            <i class="fa-solid fa-house"></i>
                <p>House</p>
            </Button>
            <Button>
            <i class="fa-solid fa-house-user"></i>
                <p>Guest House</p>
            </Button>
            <Button>
            <i class="fa-solid fa-hotel"></i>
                <p>Hotel</p>
            </Button>


            </Col>
        </Row>

        <Row>
            <h4>Amenities</h4>
            <Col md={12}>
            <p>Essentials</p>
        <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Wifi
      </label>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Washer
      </label>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Air conditioning
      </label>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Kitchen
      </label>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Heating
      </label>
            </Col>
        </Row>
        
        <Row>
            <h4>Booking options</h4>
            <Col md={12}>
            <button className='f2 '>Instant book
      
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <p>{isOn ? '' : ''}</p>
    
        
        </button>
        <button className='f2 '>Self CheckIn  
      
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <p>{isOn ? '' : ''}</p>
    
        
        </button>
        <button className='f2 '>Free cancellation 
      
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <p>{isOn ? '' : ''}</p>
    
        
        </button>
        <button className='f2 '>Allows pets
      
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <p>{isOn ? '' : ''}</p>
    
        
        </button>
            </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
  </Modal>

  )
}
