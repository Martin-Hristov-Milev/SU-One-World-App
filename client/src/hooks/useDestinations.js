import { useEffect, useState } from 'react';
import {getAll} from '../services-api/destination-API'

export function useGetAllDestinations (){
    
    const [ destinations , setDestinations ]= useState([]);
    
    useEffect(() => {
        ( async ()=> {
            const result = await getAll();
            setDestinations(result)
            
        })();
    },[]);    
    return [destinations , setDestinations]
};