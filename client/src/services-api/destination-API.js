import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/destinations';

export const create = async (destinationData) => {

    const response = await request.post(baseUrl, destinationData);
    return response
};

export const getAll = async ()=> {

    const result = await request.get(baseUrl);

    return Object.values(result) 
};

export const getOne = async ( destinationId )=> {

    const result = await request.get( `${baseUrl}/${destinationId}`);
    return result
};

export const update = async (destinationId, destinationData) => {

    const response = await request.put(`${baseUrl}/${destinationId}`, destinationData);
    return response
};

export const remove = async (destinationId) => {

    const response = await request.del(`${baseUrl}/${destinationId}`);
    return response
};

export const getLatest = async () => {

    const params = encodeURIComponent('sortBy=_createdOn desc')
    //     sortBy: `_createdOn desc`,
    //     pageSize: 5,
    // })

    const response = await request.get(`${baseUrl}?${params}`);
    return response
};
// ${params.toString()}
// ?sortBy=_createdOn%20desc
// (unencoded) /data/recipes?sortBy=_createdOn desc