import { Link } from "react-router-dom";
import  styles  from './ItemDestination.module.css'

export default function ItemDestination( {     
                        location,
                        journey,
                        budget,
                        imageUrl ,
                        _id,
                    }   
){
    return(
        <div className="list-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="list-block-content">
                            <div className={styles.img}>
                                <img src={imageUrl} alt="Destination Image"/>
                            </div>
                            <h3>{location}</h3>
                            <p> Journey: {journey}</p>
                            <p> Estimated budget: {budget}$ </p>
                                                     
                            <Link to={`/all-destinations/${_id}/details`}  className="button">DETAILS</Link>
                </div>
        </div>
    )
}