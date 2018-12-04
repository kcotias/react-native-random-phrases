import { create } from 'apisauce';
import { Alert } from 'react-native';

// define the api
const api = create({
    baseURL: 'https://geek-jokes.sameerkumar.website',
    timeout: 10000
});

function handleResponse(response) {
    if (response.status === 200) {
        return response.data;
    }
    throw new Error();
}

async function getPhrase() {
    const endpoint = '/api';
    const result = await api.get(endpoint)
        .then(response => handleResponse(response, () => getPhrase()))
        .catch(() => Alert.alert('Oops,', 'Looks like we had a problem, please try again!'));
    return result;
}

// ! ---------------------------------------------------------------


export {
    getPhrase
};
