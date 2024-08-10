

import { useContext } from "react";
import { login, register, logout } from "../services-api/auth-API"
import { authContext } from "../contexts/authContext";


export function useLogin ( ){

    const {changeAuthState} = useContext(authContext);

    const loginHandler = async ( email, password ) => {

        const { password: pass, ...result } = await login(email, password)

        changeAuthState(result);
        return result
    };

    return loginHandler
};

export function useRegister (){
    
    const {changeAuthState} = useContext(authContext);

    const registerHandler = async (email, password ) => {

        const { password: pass , ...result } = await register(email, password)

        changeAuthState(result);
        return result
    };

    return registerHandler

};
