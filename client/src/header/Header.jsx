



export default function Header (){

    return (
      
        
            <div id="header" className="nav-collapse">
                <div className="row clearfix">
                    <div className="col-1">

                        {/* <!--Logo--> */}
                        <div id="logo">

                            <h1> <span>One World</span> </h1>
                            {/* <!--End of Banner Logo--> */}

                        </div>
                        {/* <!--End of Logo--> */}

                        <aside>

                            {/* <!--Social Icons in Header--> */}
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
                            {/* <!--End of Social Icons in Header--> */}

                        </aside>

                        {/* <!--Main Navigation--> */}
                        <nav id="nav-main">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">ALL Destinations</a>
                                </li>
                                <li>
                                    <a href="#">Latest</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Register</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                                <li>
                                    <a href="#">Logout</a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!--End of Main Navigation--> */}

                    
                    </div>
                </div>
            </div>
     
    )
}