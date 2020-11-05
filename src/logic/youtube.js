import axios from 'axios';
const KEY = 'AIzaSyDB95K_UPZjepFNtQ6wqqGPtgL7m1LDMvc';
const basicQueary = 'https://www.googleapis.com/youtube/v3/search';
const videoQuery = 'https://www.googleapis.com/youtube/v3/videos';


async function getResults(query) {
    const result = await axios.get(basicQueary,{params: {
        part: 'snippet',
        maxResults:5,
        key: KEY,
        q: query
    }});
    return result.data.items;
}

async function get(id) {
    const result = await axios.get(videoQuery,{params: {
        id: id,
        part: 'contentDetails',
        key: KEY,
        
    }});
    return result.data.items;
}

export async function getItems(query) {
    return await getResults(query);
}

export async function getVideo(id) {
    return await get(id);
}

