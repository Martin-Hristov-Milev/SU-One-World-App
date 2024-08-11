import { useEffect, useState } from 'react';
import {getAll, getOne} from '../services-api/destination-API'

export function useGetAllDestinations (){
    
    const [ destinations , setDestinations ] = useState([]);
    
    useEffect(() => {
        ( async ()=> {
            const result = await getAll();
            setDestinations(result)
            
        })();
    },[]);    
    return [destinations , setDestinations]
};

export function useGetOneDestination(destinationId){

    const[destination, setDestination] = useState({});

    useEffect(() => {
        ( async ()=> {
            const result = await getOne(destinationId);
            setDestination(result)
            
        })();
    },[destinationId]);
    
    return [destination, setDestination]
};
