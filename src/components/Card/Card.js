import React from 'react'

// import './Card.css'

function Card({  name, ingredient, id }){
  return(
  <div>
    <p>{ingredient}</p>
    <p>{name}</p>
    <p>{id}</p>
  </div>
  )
}



export default Card