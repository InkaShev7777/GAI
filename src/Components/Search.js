import React, { useState } from 'react'

export default function Search(props) {
    const [queryText,setQueryText] = useState('')
  return (
    <div className='search-div'>
        <input type='search'  placeholder='Номерной знак или VIN' defaultValue='' onChange={(e)=> setQueryText(e.target.value)}/>
        <button onClick={()=>{ props.search(queryText) }}>Поиск</button>
    </div>
  )
}
