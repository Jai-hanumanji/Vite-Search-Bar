import React from 'react'
import './Searchresult.css';
export const Searchresult = ({result}) => {
  return (
    <div className='search-result' onClick={(e)=>alert(`you clicked on ${result.name}`)}>{result.name}</div>
  )
}
