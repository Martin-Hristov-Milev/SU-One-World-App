
import SmallItem from "./small-item/SmallItem"
import { getLatestDestinations } from "../../hooks/useDestinations"

 export default function Latest(){
    const latest = getLatestDestinations()

    return (

    <div id="banner-content" className="row clearfix">        
        <div className="col-2">
            <div className="section-heading">
                    <h1>LATEST DESTINATIONS</h1>
                    <h2>Adventure is out there!</h2>
                   {latest.length > 0 
                        ? latest.map( destination => <SmallItem 
                                      key={destination._id} {...destination}/> )
                        : <h2 className="no-destinations">No destinations at the moment</h2>
                    }                 
            </div>
         </div>
    </div>
   )
};

    



