
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { useForm } from '../../hooks/useForm';
import { create } from '../../services-api/destination-API'




export default function CreateDestination(){

    const navigate = useNavigate();
    const [error , setError]= useState('');
    

    const initialValues = {
        location: "",
        journey: "",
        budget: "",
        imageUrl: "",
        description: "",
    };

    const  submitCallBack =  async( values ) => {
        setError('')

        try{
           
           const result = await create( values );

           const { _id: destinationId} = result;

           navigate(`/all-destinations/${destinationId}/details`)   

        }catch( err )
          { console.log(err)
            setError(err.message)
          };
    };


  const {values,changeHandler,submitHandler,} = useForm(initialValues, submitCallBack);

    return (
        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

        <div className="row no-padding-bottom clearfix">

            
            <div className="col-3">
               
                <blockquote className="testimonial text-right bigtest">
                        <q>Life is either a daring adventure or nothing at all.
                        
                        </q>
                        <footer>― Helen Keller— </footer>
                </blockquote>
                

            </div>
            
            
            <div className="col-3">
                <div className=" section-heading">
                    <h3>THE JOURNEY STARTS HERE </h3>
                    <h2 className="section-title">CREATE NEW DESTINATION</h2>
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
                    <textarea 
                        name="description" id="description"
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

                    <input className="button " type="submit" value="CREATE " />

                    {error && <p style={{ color:'red', margin:'3em 0 3em 0' }}><span> Issue : {error}</span></p> }
                    
                </form>
            </div>
        </div>
     </div>
    </div>
    )
}