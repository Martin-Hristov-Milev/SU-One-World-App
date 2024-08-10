
export default function DetailsDestination(){

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
                        <h2 className="section-title"> Location , like City and Country</h2>
                        
                    </div>
                    <p>Budget in USD
                    </p>
                    <p>
                        Detailed description: Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                    </p>
                    
                    <a href="#"  className="button link-lightbox">
                        EDIT
                    </a>
                    <a href="#"  className="button link-lightbox">
                        DELETE
                    </a>

                    <div >
                    <h4>COMMENTS:</h4>
                         <ul> 
                            <li>
                                <p>user: comment one </p>
                            </li>
                            <li>
                                <p>user: comment one </p>
                            </li>
                                {/* {comments.map( ({_id, author, text}) => (

                                    <li key={_id} className="comment" >
                                        <p>{author.email}: {text}</p>
                                    </li>
                                ) )
                                } */}
                         </ul>
                            {/* {comments.length === 0 && (
                                <p className="no-comment">No comment.</p>
                                )} */}
                    </div> 
                    <article >
                      <label>Add new comment:</label>

                    <form 
                    // onSubmit={submitHandler}
                    >

                    {/* <input type= 'text' name='username' placeholder="username..."  /> */}

                    <textarea 
                        name="comment" 
                        placeholder="Tell us what you think ....."
                        // onChange = {changeHandler}
                        // value = {values.comment}
                    ></textarea>

                    <input className="button submit" type="submit" value="Add Comment"/>
                    </form>
                    </article>

                </div>
                {/*<!--End Content Right Side-->*/}

                <div className="col-3">
                    <img src="images/dancer.jpg" alt="Nature"/>
                </div>

            </div>
        </div>
    </div>
    )


}
      
