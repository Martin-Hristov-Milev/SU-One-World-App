
import { Link } from "react-router-dom"



export default function CreateDestination(){



    return (
        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

        <div className="row no-padding-bottom clearfix">

            {/*<!--Content Left Side-->*/}
            <div className="col-3">
               
                <blockquote className="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod    tempor incididunt ut
                            labore et dolore magna aliqua
                        </q>
                        <footer>— John Doe, Happy Customer</footer>
                </blockquote>
                

            </div>
            
            {/*<!--Content of the Midle Side-->*/}
            <div className="col-3">
                <div className=" section-heading">
                    <h3>THE JOURNEY STARTS HERE </h3>
                    <h2 className="section-title">CREATE NEW DESTINATION</h2>
                </div>

                <form id="create" 
                // onSubmit={submitHandler}
                >
                    
                    
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        // value={values.location}
                        // onChange={changeHandler}
                        placeholder="Where were you..."
                    />

                    <label htmlFor="journey">Journey type</label>
                    <input
                        type="text"
                        id="journey"
                        name="journey"
                        // value={values.journey}
                        // onChange={changeHandler}
                        placeholder="How did you get there..."
                    />

                    <label htmlFor="budget">Budget in US$</label>
                    <input
                        type="number"
                        id="budget"
                        name="budget"
                        // value={values.budget}
                        // onChange={changeHandler}
                        min="0"
                        placeholder="How much did you spend.."
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        // value={values.imageUrl}
                        // onChange={changeHandler}
                        placeholder="Link to some nice images"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description"
                    // value={values.description}
                    // onChange={changeHandler}
                    ></textarea>

                    <input className="Button " type="submit" value="CREATE " />

                    {/* {error && <p style={{ color:'red', margin:'2em', textAlign: 'center', }}><span>Issue : {error}</span></p> } */}
                    
                </form>
            </div>
        </div>
     </div>
    </div>
    )
}