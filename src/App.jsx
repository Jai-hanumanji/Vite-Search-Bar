import { useState } from 'react'
import './App.css'
import { Searchbar } from './components/Searchbar'
import { Searchresultslist } from './components/Searchresultslist';

function App() {

  const [results,setResults]=useState([]);
  return (
    <div className="App">
      <div className='search-bar-container'>
        <div><Searchbar setResults={setResults}/></div>
        <div><Searchresultslist results={results}/></div>
      </div>
    </div>
  )
}

export default App
