import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Contact from './Pages/contact/Contact';
import Gallery from './Pages/gallery/Gallery';
import NotFound from './Pages/notFound/NotFound';
import Plans from './Pages/plans/Plans';
import Trainers from './Pages/trainers/Trainers';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App