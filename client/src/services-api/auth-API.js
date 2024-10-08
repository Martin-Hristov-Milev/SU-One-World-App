import * as request from "../lib/request"


const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password)=>{
   
    const authData =  await request.post(`${baseUrl}/login`, {email, password}); 
    return authData
 };

export const register = async (email, password)=>{
   
    const authData =  await request.post(`${baseUrl}/register`, {email, password}); 
    return authData
};

export const logout = async ()=>{
   
    const authData =  await request.del(`${baseUrl}/logout`, ); 
    return authData
};