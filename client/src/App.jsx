import { Routes, Route, useParams } from 'react-router-dom'



import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from "./components/about/About";
import Login from './components/login/Login';
import Register from './components/register/Register';
import AllDestinations from './components/all-destinations/AllDestinations';
import DetailsDestination from './components/all-destinations/details-destination/DetailsDestionation';



function App() {
  
  return (
    <div id="wrapper">
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/register' element={<Register/>} />
        <Route  path='/all-destinations' element={<AllDestinations/>} />
        <Route  path='/details-destination' element={<DetailsDestination/>} />


        {/* <Route  path='/logout' element={<Logout/>} /> */}
      </Routes>

      {/* <About/> */}
     
      



      <Footer/>
    </div>
  )
}

export default App
