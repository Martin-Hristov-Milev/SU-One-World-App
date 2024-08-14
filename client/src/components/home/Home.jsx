import { Link } from "react-router-dom";

export default function Home (){

    return (
        <div id="banner-content" className="row clearfix">
             {/* <!--Banner Content--> */}
            

            <div className="col-38">

                <div className="section-heading">
                    <h1>ADVENTURE AWAITS, JUST A CLICK AWAY</h1>
                    <h2>Welcome to our platform for sharing of destinations and remember: you can always make money, but you can't always make memories!</h2>
                </div>

                <Link to='/all-destinations' className="button">START DISCOVERING TODAY</Link>
  
            </div>

        </div>


    )

}