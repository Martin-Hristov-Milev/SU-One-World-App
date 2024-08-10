

import { useContext } from "react";
import { login,  } from "../services-api/auth-API"
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
