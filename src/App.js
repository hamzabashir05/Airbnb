import React from 'react';
import './App.css';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Rooms from './Components/Rooms';
import MainText from './Components/MainText';
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import Destinations from './Components/Destinations';

import Omg1 from './Components/Omg1';


function App() {
  return (
   <Container fluid>
 <Row>
<Col md={12}>
<MainText/>
</Col>
 </Row>
 <Row>
<Col md={12}>
<NavBar/>
</Col>
 </Row>
 <Row>
<Col md={12}>
<NavBar2/>
</Col>
 </Row>

<Row>
  <Col md={12}>
  <BrowserRouter>
  <Routes> 
  <Route path='/' element={ <Destinations/>} />
  <Route path='Trending' element={<Destinations/>}/>
  <Route path='Rooms' element={<Rooms/>}/>
  <Route path='Omg1' element={<Omg1/>}/>
    </Routes>
    </BrowserRouter>
  </Col>
</Row>
    
    
    
  
   
   
    <Main/>
   
    </Container>
  );
}

export default App;
