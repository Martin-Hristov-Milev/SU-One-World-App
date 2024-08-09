import { useState } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from "./about/About";
import Details from './details/Details';


function App() {
  
  return (
    <div id="wrapper">
      <Header/>
      {/* <Home/> */}
      {/* <About/> */}
      <Details/>

      <Footer/>


    </div>
  )
}

export default App
