import React from 'react'
import { useState } from 'react';
import Carta from './Carta'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactStars from 'react-stars'
import Add from './Add';
import Hero from './Hero';
import Foooter from './Foooter';

const movielistStyle ={
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  width:'100%',
  margin:'15px auto',
  background:"#e2d307",
  position:'relative',top:'-70px'
}

function MovieList({movielist,setmovielist}) {
  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  
  return (
    <>
    <Hero/>
    <div style={{background:'#e2d307', height:'100px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'-50px'}}>
    <Row className="align-items-center">
        <Col xs="auto">
          <ReactStars
            count={5}
            onChange={(ratingChanged) => setrate(ratingChanged)}
            size={24}
            edit={true}
            color2="rgb(65, 129, 5)"
          />
        </Col>

        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={(e) => settext(e.target.value)}
          />
        </Col>

        <Col xs="auto">
        <Add movielist={movielist} setmovielist={setmovielist}/>
        </Col>
      </Row>
    </div>
    <div style={movielistStyle}>
      {movielist.filter((e)=>e.name.toLowerCase().includes(text.toLowerCase()) && e.rating >= rate).map((e)=><Carta e={e}/>)}
    </div>
    <Foooter/>
    </>
  )
}

export default MovieList