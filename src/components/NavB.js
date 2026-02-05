import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from 'react-stars';
import Carta from './Carta'
import { Link } from 'react-router-dom';


const movielistStyle ={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  width:'100%',
  margin:'0px auto',
  background: '#0e0e0e',
  position:'relative',top:'-50px'
}

function NavB({ movielist}) 
   {
    const [text, settext] = useState("");
    const [rate, setrate] = useState(5);
  return (
    
   <Navbar bg="white" expand="lg" style={{
      display:'flex', justifyContent:'center', alignItems:'center', justifyContent:'space-evenly'}}>
  
    <img
        style={{ width: '115px', height: '50px', marginBottom:'5px'}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsM-VoN0KHKg_9SC--kZujSufbZS31LJqtw&s"
        alt="logo"
      />
        <Nav.Link style={{ color: 'rgb(190, 7, 7)', fontWeight: 'bold', fontSize:'17px' }}><Link to='/'style={{textDecoration:'none',color:'rgb(190, 7, 7)'}}>Movies List </Link> </Nav.Link>
        <Nav.Link style={{ color: 'rgb(4, 85, 22)', fontWeight: 'bold',fontSize:'17px' }}><Link to='/contact'style={{textDecoration:'none',color:'rgb(4, 85, 22)'}}>Contact</Link></Nav.Link>
        <Nav.Link style={{ color: 'rgb(0, 110, 255)', fontWeight: 'bold',fontSize:'17px' }}><Link to='/about' style={{textDecoration:'none',color:'rgb(0, 110, 255)'}}>About</Link></Nav.Link>
    
</Navbar>

  )
}

export default NavB