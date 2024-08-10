import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/authContext";





export default function Header (){

    const { isAuthenticated, email }= useContext(authContext);


    return (
      
        
            <div id="header" className="nav-collapse">
                <div className="row clearfix">
                    <div className="col-1">

                        <div id="logo">
                            <h1> <span  >One World</span> </h1>
                            {/* create link !! */}
                        </div>            
                        <aside>                       
                            <ul className="social-icons">
                                <li>
                                    <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                                        <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Google+" href="http://google.com/+username">
                                        <i className="fa fa-google-plus fa-1x"></i><span>Google+</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                                        <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                                        <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" title="behance" href="http://www.behance.net">
                                        <i className="fa fa-behance fa-1x"></i><span>Behance</span>
                                    </a>
                                </li>
                            </ul>     
                        </aside>

                        <nav id="nav-main">
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to="/all-destinations">All Destinations</Link>
                                </li>
                                <li>
                                    <Link to="#">Latest</Link>
                                </li>
                                <li>
                                    <Link to="/create">Create</Link>
                                </li>
                                <li>                              
                                   <Link to="/register">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="#">Logout</Link>
                                </li>
                                <li>
                                   <Link to="/about">About us</Link> 
                                </li>

                                 { isAuthenticated 
                                 ? <li style={{color: "white"}}>Hello {email}</li> 
                                 : null
                                 }  
                                {/* <li>
                                   <Link to="/details-destination">details</Link> 
                                </li> */}
                            </ul>

                               
            
                        </nav>
                       
                    </div>
                </div>
            </div>
     
    )
}