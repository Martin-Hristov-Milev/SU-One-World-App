
import { useState, useEffect } from "react";
import { getLatest } from "../../services-api/destination-API";
import LatestItem from "./latest-item/LatestItem";



export default function Latest(){

 const [latest , setLates] = useState([]);

 useEffect( ()=> {
    ( async()=>{
        const result = await getLatest();

        setLates(result)
    })();        
    }, [])



    console.log(latest)
    // const latest = getLatest()






    return (

    <div id="banner-content" className="row clearfix">
             {/* <!--Banner Content--> */}
            

            <div className="col-38">

                <div className="section-heading">
                    <h1>LATEST DESTINATIONS</h1>
                   {latest.length > 0 
                        ? latest.map( destination => <LatestItem 
                                            key={destination._id} {...destination}/> )
                        : <h2 className="no-destinations">No destinations at the moment</h2>
                    }
                 
                </div>
                
  
            </div>

    </div>


    )
}


