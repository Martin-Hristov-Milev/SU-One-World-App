import { Routes, Route, useParams } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Login from './components/login/Login';
import Register from './components/register/Register';
import AllDestinations from './components/all-destinations/AllDestinations';
import DetailsDestination from './components/details-destination/DetailsDestination'
import CreateDestination from './components/create-destination/CreateDestination'
import Logout from './components/logout/Logout';
import EditDestination from './components/edit-destination/EditDestination';
import Profile from './components/profile/Profile';
import RouteGuard from './common/RouteGuard';
import Latest from './components/latest/Latest';
import PageNotFound from './components/page-not-found/PageNotFound';


function App() {
  
  return (
    
    <div id="wrapper">
    <AuthContextProvider>
      
      <Header/>
       <Routes>
          
          <Route  path='/' element={<Home/>} />
          <Route  path='/latest' element={<Latest/>} />
          <Route  path='/all-destinations' 
                  element={<AllDestinations/>} />
          <Route  path='/all-destinations/:destinationId/details' 
                  element={<DetailsDestination/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/login' element={<Login/>} />
          <Route  path='*' element={<PageNotFound/>} />
          
          <Route element={<RouteGuard/>}>
              <Route  path='/logout' element={<Logout/>} />
              <Route  path='/profile' element={<Profile/>} />
              <Route  path='/all-destinations/:destinationId/edit' 
                      element={<EditDestination/>} />
              <Route  path='/create' element={<CreateDestination/>}/>
          </Route>         
      </Routes>
   <Footer/> 
   </AuthContextProvider>
   </div>
  )
};

export default App
