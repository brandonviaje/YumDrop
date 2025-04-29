import React from 'react'
import MenuBar from './components/MenuBar/MenuBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';

const App = () => {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>
    </div>
  )
}

export default App;