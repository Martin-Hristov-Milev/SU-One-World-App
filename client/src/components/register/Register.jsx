import{ Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { useRegister } from '../../hooks/useAuth';


export default function Register(){

    const [error , setError]= useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const initialValues = { email:'', password: '', ['confirm-password']:''};

    const submitCallBack = async(values) =>{ 
        setError('')

        if (values.password !== values['confirm-password']) { 
            return setError('Password Missmatch')
            };

            try {
            await register( values.email, values.password );
            navigate ('/');
            } catch (err){

                setError(err.message)
            }  
        
    };

    const { values, changeHandler, submitHandler, } = useForm(initialValues, submitCallBack);

    return ( 

    <div id="banner-content" className="row ">
     <div id="services" className=" clearfix">
        <div className="row ">
          
            <div className="col-3">             
                <blockquote className="testimonial text-right bigtest">
                        <q>If you think adventure is dangerous, try routine, it's lethal
                        </q>
                        <footer>— Paul Coelho —</footer>
                </blockquote>           
            </div>
      
            <div className="col-3">
                <div className=" section-heading">
                    <h3>THE JOURNEY STARTS HERE </h3>
                    <h2 className="section-title">REGISTER</h2>
                </div>

                 <form id="register"onSubmit={submitHandler}>
                    
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" 
                                value={values.email} 
                                onChange={changeHandler} 
                                placeholder="my_mail@email.com"
                                required
                                />

                        <label htmlFor="pass">Password:</label>
                        <input type="password" name="password" id="register-password"
                                value={values.password} 
                                onChange={changeHandler} 
                                />

                        <label htmlFor="con-pass">Confirm Password:</label>
                        <input type="password" name="confirm-password" id="confirm-password"                     
                                value={values['confirm-password']} 
                                onChange={changeHandler} 
                                />
                        

                        <input className="button submit" type="submit" value="Register"/>

                        {error && <p style={{ color:'red', margin:'3em 0 3em 0',  }}><span>{error}</span></p> }
                                             
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
      
