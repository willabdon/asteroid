import axios from 'axios';

const BASE_URL = 'https://asteroid-28eb3.ew.r.appspot.com/';

const api = axios.create({
    baseURL: BASE_URL,
});

export const Method = {
    GET: 'GET',
    POST: 'POST'
}

export async function fetch({ url, method, headers, data, params }: any) {
    const response = await api({
        url,
        method,
        headers,
        data,
        params,
    });
    return response.data;
}