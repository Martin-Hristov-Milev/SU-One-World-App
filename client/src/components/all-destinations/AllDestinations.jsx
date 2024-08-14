import ItemDestination from "./Item-destination/ItemDestination"
import {useGetAllDestinations} from "../../hooks/useDestinations"



export default function AllDestinations(){

    const [destinations, setDestinations] = useGetAllDestinations();

    return (

    <div id="banner-content" className="row clearfix">
    <div id="services" className="scrollto clearfix">
    <section id="listing" className="text-center scrollto clearfix ">
            
                    <div className="section-heading">
                        <h3>OWE WORLD. YOUR CHOICE </h3>
                        <h2 className="section-title">We have the right destination for you</h2>
                    </div>
                 
                    {destinations.length > 0 
                        ? destinations.map( destination => <ItemDestination 
                                            key={destination._id} {...destination}/> )
                        : <h2 className="no-destinations">No destinations at the moment</h2>
                    }
     
     </section>
     </div>
     </div>

    )
}