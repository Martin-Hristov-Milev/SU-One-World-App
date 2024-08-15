import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLogin }from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm"


export default function Login(){

    const navigate = useNavigate();
    const [error , setError]= useState('');
    const login = useLogin();

    const initialValues = { email:'', password:''};

    const submitCallBack = async({email, password}) =>{ 
        setError('')

        try {
           await login( email, password );
           navigate ('/');
        } catch (err){
            console.log(err.message)
            setError(err.message);
        }
     };

     const {values, changeHandler, submitHandler, } = useForm(initialValues, submitCallBack)

    return ( 

        <div id="banner-content" className="row">
        <div id="services" className="clearfix">

        <div className="row ">         
            <div className="col-3">              
                <blockquote className="testimonial text-right bigtest">
                        <q>Not all those who wander are lost.
                        </q>
                        <footer>— J.R.R. Tolkien —</footer>
                </blockquote>
            </div>
                    
            <div className="col-3">
                <div className=" section-heading">
                    <h3>WELCOME BACK</h3>
                    <h2 className="section-title">LOGIN</h2>
                </div>

                <form id="login" onSubmit={submitHandler}>
             
                     <label htmlFor="email">Email:</label>
                     <input type="email" id="email" 
                             name="email" 
                             placeholder="my-email@gmail.com"
                             value={values.email} 
                             onChange={changeHandler}
                             required
                             />

                     <label htmlFor="login-password">Password:</label>
                     <input type="password" id="login-password" 
                             name="password"
                             value={values.password}
                             onChange={changeHandler}
                             />

                     <input type="submit" className="button link-lightbox" value="Login"/>

                    {error && <p style={{ color:'red', margin:'3em 0 3em 0',  }}>
                                  <span>{error}</span>    
                              </p>
                    }      
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
};
      
