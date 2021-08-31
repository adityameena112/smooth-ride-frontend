import axios from 'axios';
import { BASE_URL, AUTHENTICATE } from '../../constant/constant';

const AUTHENTICATE_USER = (username,password) => {

    let data = null;

    axios.post(BASE_URL + AUTHENTICATE, {
        username: username,
        password: password
    }).then((response) => {
        console.log(response.data);
        data = response;
    }).catch((error) => {
        throw error;
    })
    return data;
}

export { AUTHENTICATE_USER };