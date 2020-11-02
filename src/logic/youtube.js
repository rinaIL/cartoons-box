import axios from 'axios';
const KEY = 'AIzaSyDB95K_UPZjepFNtQ6wqqGPtgL7m1LDMvc';
const basicQueary = 'https://www.googleapis.com/youtube/v3/search';
const videoQuery = 'https://www.googleapis.com/youtube/v3/videos';


async function getResults() {
    const result = await axios.get(basicQueary,{params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        q: "ComeOutsideTV"
    }});
    return result.data.items;
}

async function get() {
    const result = await axios.get(videoQuery,{params: {
        id: 'Z9YTB5XkQdg',
        part: 'contentDetails',
        key: KEY,
        
    }});
    return result.data.items;
}

export async function getItems() {
    return await getResults();
}

export async function getVideo() {
    return await get();
}

