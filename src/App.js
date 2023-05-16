import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import CatalogCars from './Components/CatalogCars';
import { useState } from 'react';
import axios from 'axios';
import Card from './Components/Card';

function App() {
  const [isSearch,setIsSearch] = useState(false)
  const [searchData,setSearchData] = useState([])
  const setSearch = () =>{
    setIsSearch(!isSearch)
  }
   const search = (text) => {
     axios.get(`http://127.0.0.1:8000/api/car?query=${text}`,true)
    .then((data)=>{
      setSearchData(data)
    })
  }
  const getData = () => {
    console.log(searchData["data"]["digits"])
    if(searchData !== null){
      console.log(searchData.digits);
      return searchData
    }
  }
  return (
    <div className="App">
      <Header/>
      <Search search={search} setSearch={setSearch}/>
      {isSearch != true &&
        <CatalogCars/>
      }
      {isSearch &&
        <Card data={getData}/>
      }
    </div>
  );
}

export default App;
