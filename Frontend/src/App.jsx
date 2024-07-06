import React from 'react'
import { Routes, Route } from "react-router-dom";
import Portal from './components/Portal'
import AppleNews from './components/themes/AppleNews';
import Navbar from './components/Navbar';
import Singup from './components/user/Singup';
import Login from './components/user/Login';
import ArgentinaNews from './components/themes/ArgetinaNews'
import UsBusiness from './components/themes/UsBusiness';
import WorldNews from './components/themes/WorldNews';
import WallStrertJournal from './components/themes/WallStrertJournal';
import Contact from './components/user/Contact';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Portal />}/>
        <Route path='/tecnologia' element={<AppleNews />}/>
        <Route path='/suscribirse' element={<Singup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/argentina' element={<ArgentinaNews />}/>
        <Route path='/us-business' element={<UsBusiness  />}/>
        <Route path='/world-news' element={<WorldNews  />}/>
        <Route path='/wall-street-journal' element={<WallStrertJournal  />}/>
        <Route path='/contacto' element={<Contact  />}/>
      </Routes>
    </>
  )
}

export default App
