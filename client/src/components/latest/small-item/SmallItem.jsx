import { Link } from "react-router-dom";
import styles from './SmallItem.module.css'



export default function LatestItem( 
    {     
      location,                
      imageUrl ,                 
      _id,                                    
    }
  ){
    return(
        <div className="list-block col-3" >
            <div  className="list-block-content">
                    <Link to={`/all-destinations/${_id}/details`} className={styles.block}>
                         <div className="">
                             <img className={styles.img}src={imageUrl} alt="Destination Image"/>
                         </div>
                        <h3>{location}</h3>
                    </Link>    
             </div>
        </div>
    )
};