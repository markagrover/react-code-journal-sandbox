import axios from 'axios';
import { FETCH_TEST } from './types';


export const fetchTest = () => {
    return async dispatch => {
        const res = await axios.get('/api/test');
        console.log(res);
        return dispatch({ type: FETCH_TEST, payload: res.data });
    }
};
