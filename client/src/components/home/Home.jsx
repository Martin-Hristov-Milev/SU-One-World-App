import { Link } from "react-router-dom";

export default function Home (){

    return (
        <div id="banner-content" className="row clearfix">
             {/* <!--Banner Content--> */}
            

            <div className="col-38">

                <div className="section-heading">
                    <h1>A FREE AND SIMPLE LANDING PAGE</h1>
                    <h2>Namari is a free landing page template you can use for your projects. It is free to use for your
                        personal and commercial projects, enjoy!</h2>
                </div>

                <Link to='/all-destinations' className="button">START DISCOVERING TODAY</Link>
  
            </div>

        </div>


    )

}