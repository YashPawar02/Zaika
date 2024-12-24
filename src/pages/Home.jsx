import React from 'react'
import Header from '../components/Header'
import CatgoryMenu from '../components/CatgoryMenu'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import Footer from './Footer'
import BestPlacesAndCuisines from '../components/BestPlacesAndCuisines'
import ZaikaAd from '../components/ZaikaAd'
import HelpPage from './HelpPage'

const Home = () => {
  return (
    <div className=''>
    <Header/>
    <CatgoryMenu/>
    <FoodItem/>
    <Cart/>
    <BestPlacesAndCuisines/>
    <ZaikaAd/>
    <Footer/>
    </div>
  )
}

export default Home