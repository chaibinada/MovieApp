import React from 'react'
import './Carta.css'
import ReactStars from 'react-stars'

function Carta({e}) {
  return (
    <div className="carta">
      <img src={e.posterurl} alt="Movie Poster" />
  <div className="info">
    <div className="movie-name">{e.name}</div>
    <div className="description">{e.description}</div>
    <ReactStars
      count={5}
      value={e.rating}
      // onChange={ratingChanged}
      size={24}
      edit={false}
      color2={'#ffd700'} />
      </div>
</div>
  )
}

export default Carta