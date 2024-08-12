import * as request from '../lib/request'


const url =  `http://localhost:3030/data/comments`;

export const create = async (destinationId, text)=>{
   
    const newComment =  await request.post( url, {destinationId, text}) 
    return newComment
};

export const getAll = async (destinationId)=>{

    const params = new URLSearchParams({
       where: `destinationId="${destinationId}"`,
       load: `author=_ownerId:users`
    });

    const result = await request.get(`${url}?${params.toString()}` )
    return result
};

