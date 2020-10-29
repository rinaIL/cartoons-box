import axios from 'axios';
const KEY = 'AIzaSyDB95K_UPZjepFNtQ6wqqGPtgL7m1LDMvc';
const basicQueary = 'https://www.googleapis.com/youtube/v3/search';


async function getResults() {
    const result = await axios.get(basicQueary,{params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        q: "Blippi"
    }});
    return result.data.items;
}

export async function getItems() {
    return await getResults();
}