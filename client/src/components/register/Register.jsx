import{ Link } from 'react-router-dom'





export default function Register(){

    return ( 

        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

        <div className="row no-padding-bottom clearfix">

            {/*<!--Content Left Side-->*/}
            <div className="col-3">
                {/*<!--User Testimonial-->*/}
                <blockquote className="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod    tempor incididunt ut
                            labore et dolore magna aliqua
                        </q>
                        <footer>— John Doe, Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

            </div>
            
            {/*<!--Content of the Midle Side-->*/}
            <div className="col-3">
                <div className=" section-heading">
                    <h3>THE JOURNEY STARTS HERE </h3>
                    <h2 className="section-title">REGISTER</h2>
                </div>

                 <form id="register"
                    // onSubmit={submitHandler}
                    >
                   

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" 
                                // value={values.email} 
                                // onChange={changeHandler} 
                                placeholder="my_mail@email.com"
                                />

                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password"
                                // value={values.password} 
                                // onChange={changeHandler} 
                                />

                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password"
                        
                                // value={values['confirm-password']} 
                                // onChange={changeHandler} 
                                />
                        

                        <input className="button submit" type="submit" value="Register"/>


                        {/* {error && <p style={{ color:'red', margin:'2em', textAlign: 'center', }}><span>{error}</span></p> } */}
                            
                    
                 </form>

                <p className="section-subtitle">
                    <span>If you already have profile click <Link to="/login">here</Link></span> 
                </p>
               
            </div>
        </div>
     </div>
    </div>

    )


}
      
