import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import {useGetOneDestination} from '../../hooks/useDestinations'
import { authContext } from "../../contexts/authContext";
import { remove } from "../../services-api/destination-API";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useForm } from "../../hooks/useForm";



const initialValues = { comment: ''};

export default function DetailsDestination(){

    const [error , setError]= useState('');

    const {destinationId } = useParams(); 
    const [destination, setDestination] = useGetOneDestination(destinationId);

    const { userId, email } = useContext(authContext);

//  ----------------comments ----------------

    const createComment = useCreateComment();

    const [comments, setComments]= useGetAllComments(destinationId);


    const submitCallBack = async (values)=>{  
        setError('');
        try{
            if(!values.comment){
                setError('No Content')
                return 
            }
            const newComment = await createComment(destinationId, values.comment );

            setComments( old => [...old, {...newComment, author: {email} }])
        
        }catch(err){
            // error measage or empty comments validation
            console.log(err.message)
            setError(err.message)
        }
     }; 

    const {values, changeHandler, submitHandler,} = useForm(initialValues, submitCallBack);


// ------------------delete------------------

    const deleteHandler = async ()=> {
        const isConfirmed = confirm( `Are you sure you want to delete the destination to ${destination.location} ?`)   
        if(!isConfirmed) { return }

            try{  
            const result = await remove(destinationId);  
            //  navigete here or.. via Link? // error msg? 
            }catch(err){ 
            console.log (err)}
        };

    const isOwner = userId === destination._ownerId;

    return ( 

    <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

            <div className="row no-padding-bottom clearfix"> 

                {/*<!--Content Left Side-->*/}
                <div className="col-3">
                    <blockquote className="testimonial text-right bigtest">
                            <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua
                            </q>
                            <footer>— John Doe, Happy Customer</footer>
                    </blockquote>
                </div>
                
                {/*<!--Content of the Midle Side-->*/}
                <div className="col-3">
                    <div className="section-heading">
                        <h3>BELIEVING</h3>
                        <h2 className="section-title"> {destination.location}</h2>
                        
                    </div>
                    <p>Journey : {destination.journey}</p>
                    <p>Budget in USD : {destination.budget}</p>
                    
                    <p>{destination.description}</p>
                    
                    
                    {isOwner && (
                        <>
                        <Link to={ `/all-destinations/${destinationId}/edit` } className="button"
                        >EDIT</Link>

                        <Link to='/all-destinations' 
                        onClick={deleteHandler} 
                        className="button"
                        >DELETE</Link>
                        </>
                    )}
                   

                    <div >
                    <h4>COMMENTS:</h4>
                         <ul> 
                             {comments.map( ({_id, author, text}) => (

                                 <li key={_id} className="comment" >
                                     <p>{author.email}: {text}</p>
                                 </li>
                                ) 
                              )}
                         </ul>
                            {comments.length === 0 && (
                                <p >No comments.</p>
                                )}
                    </div> 
                    <article >
                        <label>Add new comment:</label>

                        <form onSubmit={submitHandler}>
                    
                        {/* <input type= 'text' name='username' placeholder="username..."/> */}

                        <textarea 
                            name="comment" 
                            placeholder="Tell us what you think ....."
                            onChange = {changeHandler}
                            value = {values.comment}
                        ></textarea>

                        {error && <p style={{ color:'red', margin:'2em 0 2em 0'}}>
                         <span>{error}</span>    
                         </p>
                        }

                        <input className="button submit" 
                               type="submit" 
                               value="Add Comment"/>
                        </form>
                    </article>

                </div>
                {/*<!--End Content Right Side-->*/}

                <div className="col-3">
                    <img src={destination.imageUrl} alt="Image"/>
                </div>

            </div>
        </div>
    </div>
    )


}
      
