
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import { useForm } from '../../hooks/useForm';
import { update } from '../../services-api/destination-API'
import { useGetOneDestination } from "../../hooks/useDestinations";




export default function EditDestination(){

    const navigate = useNavigate();
    const {destinationId} = useParams();
   
    const [destination, setDestination] = useGetOneDestination(destinationId);

    const initialValues = {
        location: "",
        journey: "",
        budget: "",
        imageUrl: "",
        description: "",
    };

    const submitCallBack = async (values)=>{

        const isConfirmed = confirm( 'Are you sure you want to update...')
        if(isConfirmed) {

            const updatedDestination = await update(destinationId, values);
             navigate(`/all-destinations/${destinationId}/details`);  
        }
    }; 

    const {
        values,
        changeHandler,
        submitHandler,
        reinitializeForm,
        } = useForm(  destination , submitCallBack);

    useEffect( ()=>{reinitializeForm()},[destination])
            
           

  

    return (
        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">
        <div className="row no-padding-bottom clearfix">

            
            <div className="col-3">              
                <blockquote className="testimonial text-right bigtest">
                        <q>Once a year, go someplace you've never been before.


                        </q>
                        <footer>― Dalai Lama ―</footer>
                </blockquote>
            </div>
            
     
            <div className="col-3">
                <div className=" section-heading">
                    <h3>THIS ADVENTURE IS GETTING BETTER </h3>
                    <h2 className="section-title">EDIT DESTINATION</h2>
                </div>

                <form id="create" 
                 onSubmit={submitHandler}
                >
                    
                    
                    <label htmlFor="location">Location *</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={values.location}
                        onChange={changeHandler}
                        placeholder="Where were you..."
                        required
                    />

                    <label htmlFor="journey">Journey type *</label>
                    <input
                        type="text"
                        id="journey"
                        name="journey"
                        value={values.journey}
                        onChange={changeHandler}
                        placeholder="How did you get there..."
                        required
                    />


                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Link to some nice images"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                        rows="6" cols="21"
                        placeholder="Now the details please..."
                        value={values.description}
                        onChange={changeHandler}
                    ></textarea>

                    <label htmlFor="budget">Budget in USD</label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        value={values.budget}
                        onChange={changeHandler}
                        min="0"
                        placeholder="How much did you spend.."
                    />

                    <input className="button " type="submit" value="UPDATE" />

                   
                    
                </form>
            </div>
     </div>
    </div>
    </div>
    )
}