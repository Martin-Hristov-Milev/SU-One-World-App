

import { login,  } from "../services/authAPI"


export function useLogin ( ){

    const {changeAuthState} = useContext(authContext);

    const loginHandler = async ( email, password ) => {

        const { password: pass, ...result } = await login(email, password)

        
        return result
    };

    return loginHandler
};
