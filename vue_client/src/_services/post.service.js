import config from 'config';
import {authHeader} from '../_helpers';
import {router} from '../_helpers';

export const postService = {
    getAll,
    add
};

function getAll() {

    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/post/all/`, requestOptions).then(handleResponse);
}



function add(content) {
    const requestOptions = {
        method: 'POST',
        headers: {...{'Content-Type': 'application/json'}, ...authHeader()},
        body: JSON.stringify({content})
    };

    return fetch(`${config.apiUrl}/post/add/`, requestOptions).then(handleResponse).then(content => {
            router.push('/posts')
            return content
        }
    )
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}