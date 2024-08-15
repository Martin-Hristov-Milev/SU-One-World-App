

import {useGetOwnerDestination} from "../../hooks/useDestinations"
import { useContext } from 'react';
import { authContext } from '../../contexts/authContext'
import SmallItem from '../latest/small-item/SmallItem'

export default function Profile(){

    const { userId, email } = useContext(authContext);

    const [destinations, setDestinations] = useGetOwnerDestination(userId);

    return (

    <div id="banner-content" className="row clearfix">
    <div id="services" className="scrollto clearfix">
    <section id="listing" className="text-center scrollto clearfix ">
              <div className="section-heading">
                <h2 className="section-title">Hello {email}, nice to have you in the team</h2>
                <h3>YOUR DESTINATIONS</h3>
              </div>

              {destinations.length > 0 
                  ? destinations.map( destination => <SmallItem 
                                key={destination._id} {...destination}/> )
                  : <h2 className="no-destinations">No destinations at the moment</h2>
              }
                <div className="list-block col-3 wow fadeInUp" data-wow-delay="0.4s">
               </div>    
     </section>
     </div>
     </div>

    )
}
