import React, { useState } from 'react'

export default function Search(props) {
    const [queryText,setQueryText] = useState('')
  return (
    <div className='search-div'>
        <input type='text' placeholder='Номерной знак или VIN' defaultValue='' onChange={(e)=> setQueryText(e.target.value)}/>
        <button onClick={()=>{props.setSearch(); props.search(queryText) }}>Поиск</button>
    </div>
  )
}
