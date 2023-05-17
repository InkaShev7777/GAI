import React from 'react'

export default function Car (props) {
  return (
    <div className='card-div' onClick={()=>{props.choiseSlug(props.slug)}}>
        <img src={props.img} alt='car-image'></img>
        <h3>{props.title}</h3>
    </div>
  )
}
