import * as axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ currentPage }&count=${ pageSize }`, {
        withCredentials: true,
    })
}



export const getMusic = (radioId = 6, searchArtist) => {
    return axios.get('https://deezerdevs-deezer.p.rapidapi.com/search', {
        params: {q: searchArtist},
        withCredentials: true,
        headers: {
            'x-rapidapi-key': 'e190ea7db0msha70ac2b007e086dp1fc146jsna246d532874c',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    })
}