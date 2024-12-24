import React from 'react'
import './App.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';

import ProctectedRoute from './components/ProctectedRoute';
import BestPlacesAndCuisines from './components/BestPlacesAndCuisines';
import HelpPage from './pages/HelpPage';
import AboutUsPage from './pages/AboutUsPage';



const App = () => {
  return (
    
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/success' element={<ProctectedRoute element={<Success />}/>} />
        <Route path="/restaurants" element={<BestPlacesAndCuisines />} />
        
        <Route path='/help' element={<HelpPage/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    
    
    </BrowserRouter>








     
   



    
    </>
  )
}

export default App