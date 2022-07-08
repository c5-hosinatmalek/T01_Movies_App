import FOOTER from './components/footer';
import {createContext, useState } from 'react';
import './App.css';
import NAV from './components/nav';

import { useEffect } from 'react';
import MAINPAGE from './components/main_page';
import { Routes,Route } from 'react-router-dom';
import MYFAV from './components/myfav';
import MAINMOVI from './components/main_movi';
export const usecount=createContext()
function App() {
  
  useEffect(()=>{
   
  },[])
  
  if(localStorage.getItem("fav")===undefined){
    localStorage.setItem("fav",JSON.stringify([]))
  }
  const [countFav,setCountFav]=useState(JSON.parse(localStorage.getItem("fav")).length)
  return (
    <div className="App">
       <usecount.Provider value={{countFav,setCountFav}} >
   <NAV/>
    
   <Routes>
    <Route path='/' element={<MAINPAGE/>}/>
    <Route path='/my_favorite' element={<MYFAV/>}/>
    <Route path='/main_movi' element={<MAINMOVI/>} />
   </Routes>
   </usecount.Provider>
   <FOOTER/>
    </div>
  );
}

export default App;
