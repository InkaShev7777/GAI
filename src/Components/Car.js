import React from 'react'

export default function Car (props) {
  return (
    <div className='card-div'>
        <img src={props.img} alt='car-image'></img>
        <h3>{props.title}</h3>
    </div>
  )
}
