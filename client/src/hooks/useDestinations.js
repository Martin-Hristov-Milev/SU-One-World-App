import { useEffect, useState } from 'react';
import {getAll, getByOwner, getLatest, getOne} from '../services-api/destination-API'

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

export function useGetOwnerDestination(ownerId){

    const[destination, setDestination] = useState([]);

    useEffect(() => {
        ( async ()=> {
            const result = await getByOwner(ownerId);
            setDestination(result)
            
        })();
    },[ownerId]);
    
    return [destination, setDestination]
};

export function getLatestDestinations(){

    const [latest , setLates] = useState([]);
   
    useEffect(()=> {
       ( async()=>{
           const result = await getLatest();
   
           setLates(result)
       })();        
    }, []);

    return latest
};
