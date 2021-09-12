import * as axios from "axios";

const musicUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';

const instanceUser = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "13471437-a87c-406f-a589-4a503cd97178"
    }

})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanceUser.get(`users?page=${ currentPage }&count=${ pageSize }`)
            .then(response => {
                return response.data
            })
    },
    getFriends(currentPage = 1, pageSize = 10) {
        return instanceUser.get(`users?friend=${true}&page=${ currentPage }&count=${ pageSize }`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instanceUser.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instanceUser.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanceUser.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instanceUser.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instanceUser.put(`profile/status`, { status: status });
    },
    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file)
        return instanceUser.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instanceUser.put(`profile`, profile);
    }
}

export const authAPI = {
    me() {
        return instanceUser.get('auth/me')
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanceUser.post('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout() {
        return instanceUser.delete('auth/login');
    }
}

export const securityAPI = {
    getCaptcha() {
        return instanceUser.get('security/get-captcha-url')
    },
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