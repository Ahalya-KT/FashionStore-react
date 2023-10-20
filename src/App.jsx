import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Brands from './components/Brands'
import NewArrivals from './components/NewArrivals'

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
    </div>

    
  )
}

export default App
