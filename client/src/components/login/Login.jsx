import { Link } from "react-router-dom";

export default function Login(){

    return ( 

        <div id="banner-content" className="row clearfix">
        <div id="services" className="scrollto clearfix">

        <div className="row no-padding-bottom clearfix">

            {/*<!--Content Left Side-->*/}
            <div className="col-3">
                {/*<!--User Testimonial-->*/}
                <blockquote className="testimonial text-right bigtest">
                        <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua
                        </q>
                        <footer>— John Doe, Happy Customer</footer>
                </blockquote>
                {/*<!-- End of Testimonial-->*/}

            </div>
            
            {/*<!--Content of the Midle Side-->*/}
            <div className="col-3">
                <div className=" section-heading">
                    <h3>WELCOME BACK</h3>
                    <h2 className="section-title">LOGIN</h2>
                </div>

                <form id="login" 
                // onSubmit={submitHandler}
                >
                   
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" 
                                    name="email" 
                                    placeholder="my-email@gmail.com"
                                    // value={values.email} 
                                    // onChange={changeHandler}
                                    />

                            <label htmlFor="login-password">Password:</label>
                            <input type="password" id="login-password" 
                                    name="password"
                                    // value={values.password}
                                    // onChange={changeHandler}
                                    />

                            <input type="submit" className="button link-lightbox" value="Login"/>

                            {/* {error && <p style={{ color:'red', margin:'2em', textAlign: 'center', }}>
                                <span>{error}</span></p> }; */}

                  
                </form>

                <p className="section-subtitle">
                    <span>If you don't have profile click 
                        <Link to='/register'> here </Link>
                    </span>
                </p>
               
            </div>
        </div>
     </div>
    </div>

    )


}
      
