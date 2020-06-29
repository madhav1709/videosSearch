import axios from 'axios';

const KEY = 'AIzaSyD_Aaoqbj7cU-hn8RD4uOMISzQuwhwFkck';
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params : {
        part:'snippet',
        type:'vdeo',
        maxResults:5,
        key: `${KEY}`
    }
});