import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/destinations';

export const create = async (destinationData) => {

    const response = await request.post(baseUrl, destinationData);

    return response
};

export const getAll = async ()=> {

    const result = await request.get(baseUrl);

    return Object.values(result); 
}