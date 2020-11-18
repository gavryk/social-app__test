import * as axios from "axios";

const musicUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';

const instanceUser = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "96b5b4b4-2b9b-41b2-abb3-0e572094ac98"
    }

})
export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceUser.get(`users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => {
                return response.data
            })
    }
}



export const getMusic = (radioId = 6, searchArtist) => {
    return axios.get(`${musicUrl}search`, {
        params: {q: searchArtist},
        withCredentials: true,
        headers: {
            'x-rapidapi-key': 'e190ea7db0msha70ac2b007e086dp1fc146jsna246d532874c',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then(response => response.data)
}