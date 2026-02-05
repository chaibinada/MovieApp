import React from 'react'
import { useParams } from 'react-router-dom'
import MovieList from './MovieList';
import ReactStars from 'react-stars';

function Trailer({movielist}) {
    const params=useParams();
    const movie=movielist.filter((e)=>e.name==params.name)[0];
    
  return (
    <div>
      <h1>{movie.name} </h1>
      <img src={movie.posterurl}/>
      <p>{movie.description} </p>
       <ReactStars
      count={5}
      value={movie.rating}
      // onChange={ratingChanged}
      size={24}
      edit={false}
      color2={'#ffd700'} />


    </div>
  )
}

export default Trailer
