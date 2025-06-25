import axios from 'axios';

const API_KEY = '51014016-712075211dd4ddd9d92f84ca4';
const baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    return axios
    .get(baseURL, { params })
    .then(response => response.data)
}