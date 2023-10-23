import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Brands from './components/Brands'
import NewArrivals from './components/NewArrivals'
import Sales from './components/Sales'
import Favourites from './components/Favourites'
import Community from './components/Community'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <div>
      <Home/>
    </div>
    <div>
      <Brands/>
    </div>
    <div>
      <NewArrivals/>
    </div>
    <div>
      <Sales/>
    </div>
    <div>
      <Favourites/>
    </div>
    <div>
    <Community/>
    </div>
    <div>
      <Footer/>
    </div>
   
    </div>

    
  )
}

export default App
