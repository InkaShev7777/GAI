import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import CatalogCars from './Components/CatalogCars';
import { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';
import CatalogModels from './Components/CatalogModels';

function App() {
  const [isSearch,setIsSearch] = useState(false)
  const [searchText, setSeachText] = useState('')
  const [slugMark,setSlugMark] = useState('')
  const [showMark,setShowMark] = useState(false)
  const [showHome,setShowhome] = useState(true)
  const setSearch = () =>{
    setIsSearch(!isSearch)
  
  }
   async function search(text){
     setSeachText(text)
     if(text.length >=  8){
      setIsSearch(true)
      setShowhome(false)
      setShowMark(false)
     }
     else{
      setIsSearch(false)
     }
  }
  const choiseSlug = (sluq) => {
    if(sluq.length > 0){
      setSlugMark(sluq)
    }
    else{
      setSlugMark('')
    }
    setShowMark(!showMark)
    setShowhome(!showHome)
    console.log(sluq);
  }
  const homeNow = () =>{
    setShowhome(true)
    setIsSearch(false)
    setShowMark(false)
  }

  return (
    <div className="App">
      <Header homeNow={homeNow}/>
      <Search search={search} />
      { showHome &&
           <CatalogCars choiseSlug={choiseSlug}/>
      }
      {isSearch &&
        <Card setSearch={homeNow} text={searchText}/>
      }
      { showMark &&
        <CatalogModels sluq={slugMark}/>
      }
    </div>
  );
}

export default App;
