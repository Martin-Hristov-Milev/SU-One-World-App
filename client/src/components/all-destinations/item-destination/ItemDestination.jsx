import { Link } from "react-router-dom";



export default function ItemDestination(){

    return(

        <div className="list-block col-3 wow fadeInUp" data-wow-delay="0.4s">

                 <div className="list-block-content">
                            <div className="listing">
                                <div className="list">
                                <img src="/images/logo-2.png" alt=""/>
                                </div>
                                
                                
                            </div>
                            <h3>Country</h3>
                            <p>Description
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cupiditate facilis expedita quaerat 
                            </p>
                            
                        
                            
                            <Link to="/details-destination" className="button">DETAILS</Link>
                 </div>
          </div>

    )
}