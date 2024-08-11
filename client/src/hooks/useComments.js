import { useEffect, useState } from 'react';
import { create, getAll } from '../services-api/comment-API'

export function useCreateComment(){

    const createHandler = async(destinationId, comment) => await create(destinationId, comment); 

    return createHandler

};

export function useGetAllComments(destinationId){
    const [comments, setComments]= useState([])

    useEffect(()=> {
        ( async ()=>{
            const result = await getAll(destinationId);

            setComments(result)
        })();
    },[destinationId]);

    return [comments, setComments]
    
        
}