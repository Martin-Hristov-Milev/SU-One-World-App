import { Routes, Route, useParams } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from "./components/about/About";
import Login from './components/login/Login';
import Register from './components/register/Register';
import AllDestinations from './components/all-destinations/AllDestinations';
import DetailsDestination from './components/all-destinations/details-destination/DetailsDestionation'
import CreateDestination from './components/create-destination/CreateDestination'




function App() {
  
  return (
    <AuthContextProvider>
    <div id="wrapper">
      
      <Header/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/all-destinations' element={<AllDestinations/>} />
          <Route  path='/create' element={<CreateDestination/>} />


          <Route  path='/details-destination' element={<DetailsDestination/>} />


          {/* <Route  path='/logout' element={<Logout/>} /> */}
        </Routes>

        {/* <About/> */}
     
      <Footer/>
      
    </div>
    </AuthContextProvider>
  )
};

export default App
