
import SmallItem from '../latest/small-item/SmallItem'

import {useGetOwnerDestination} from "../../hooks/useDestinations"
import { useContext } from 'react';
import { authContext } from '../../contexts/authContext';

export default function AllDestinations(){

    const { userId, email } = useContext(authContext);

    const [destinations, setDestinations] = useGetOwnerDestination(userId);

    return (

    <div id="banner-content" className="row clearfix">
    <div id="services" className="scrollto clearfix">
    <section id="listing" className="text-center scrollto clearfix ">
            <div className="row clearfix">

                    <div className="section-heading">
                        <h3>Hello {email} </h3>
                        <h2 className="section-title">We have the right destination for you</h2>
                    </div>
                 
                    {destinations.length > 0 
                        ? destinations.map( destination => <SmallItem
                                            key={destination._id} {...destination}/> )
                        : <h2 className="no-destinations">No destinations at the moment</h2>
                    }
        
             </div>
     </section>
     </div>
     </div>

    )
}