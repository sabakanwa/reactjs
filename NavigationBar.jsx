/* import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'; */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../style/all.css';
import { LiaShopware } from 'react-icons/lia';


function NavigationBar() {
  return (
    <>
   {/*  <Navbar  bg="dark" data-bs-theme="dark">
        <Container>
          <Link   to="#home">Navbar</Link>
          <Nav className="ms-auto ">
          <Link  className='nav-link'  to="/">Home</Link>
            <Link  className='nav-link'  to="/products">Products</Link>
            <Link  className='nav-link'  to="/login">Login</Link>
            <Link  className='nav-link'  to="/signup ">Signup</Link>
          </Nav>
        </Container>
      </Navbar> */}
      
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark"  >
      <Container>
        <Link  className='ms-4 btn btn-dark mt-1' to="/home"> <LiaShopware/>Clicky Online Shopping</Link>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Link  className='ms-4 btn btn-warning   btn-outline-dark' to="/">Home</Link>
            <Link  className='ms-4 btn btn-warning  btn-outline-dark' to="/products">Products</Link>
            <Link  className='ms-4 btn btn-warning  btn-outline-dark' to="/login">Login</Link>
            <Link  className=' ms-4 btn btn-warning   btn-outline-dark' to="/signup">Signup</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </> 
  )
}

export default NavigationBar