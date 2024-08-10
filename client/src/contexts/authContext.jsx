
import { createContext, useState } from "react";

            const initialContext = {
                userId: '',
                email: '',
                accessToken: '',
                isAuthenticated: false,
                changeAuthState: (authState)=> null,
                logout: ()=> null,
            };

export const authContext = createContext(initialContext);


export function AuthContextProvider( props ) {

    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken' , state.accessToken)
        setAuthState(state); 
    };

    const logout = () => {
        localStorage.removeItem('accessToken')
        setAuthState( initialContext );   
    };

    const ctxData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
        logout,
    };

    return (
        
        <authContext.Provider value={ctxData} >
            {props.children}
        </authContext.Provider >
        )

};

