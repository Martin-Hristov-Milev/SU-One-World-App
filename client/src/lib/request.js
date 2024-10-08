

const buildOptions = (data)=> { 
    const options = {};

    const accessToken = localStorage.getItem('accessToken');


    if(accessToken) {
       
        options.headers = {...options.headers, 'X-Authorization' : accessToken, }
    };

    if(data) {
        options.body = JSON.stringify(data);
        options.headers = {...options.headers, 'Content-Type' : 'application/json',};
    };
    return options;
}

const request = async (method, url, data) => {

    const response = await fetch(url, {
        method,
        ...buildOptions(data)
        });

        if (response.status === 204 ) {
            return 
        }

     const result = await response.json();

            if(!response.ok){
                // alert(result.message)
                throw result
            };

    return result

};
export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const del = request.bind(null, 'DELETE')

