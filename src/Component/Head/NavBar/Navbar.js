import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import topclass from '../../../Assist/topbar.module.css'

const Topbar = () => {
   return (
      <div className={topclass.topbar}>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className={`me-auto ${topclass.list}`}>
                     <Link to="/" >Home</Link>
                     <Link to="/about" >About</Link>
                     <Link to="/services" >Service</Link>
                     <Link to="/appointment" >appointment</Link>
                     <Link to="/appointment" >Home</Link>
                  </Nav>
                  <Nav className={topclass.list}>
                     <Link to="/login" >Login</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};

export default Topbar;