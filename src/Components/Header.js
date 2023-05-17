import React from 'react'

export default function Header(props) {
  return (
    <div className='header'>
        <h3>База ГАИ 2023</h3>
        <h4 className='btn-home' onClick={()=>{props.homeNow()}}>Home</h4>
    </div>
  )
}

