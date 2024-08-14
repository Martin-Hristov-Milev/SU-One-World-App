import { Link } from "react-router-dom";
import styles from './SmallItem.module.css'



export default function LatestItem( {     
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
                        <Link to={`/all-destinations/${_id}/details`} >
                            <div className="">
                            
                                <img className={styles.img}src={imageUrl} alt="Destination Image"/>
                            {/* <div className="list"></div> */}
                            </div>
                            <h3>{location}</h3>
                        
                            <p>{budget}$</p>
                            </Link>
                                                     
                            {/* <Link to={`/all-destinations/${_id}/details`}  className="button">DETAILS</Link> */}
                 </div>
          </div>

    )
}