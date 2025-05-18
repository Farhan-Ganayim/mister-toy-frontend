import { httpService } from "./http.service"

export const userService = {
    login,
    signup,
    logout,
    getLoggedinUser,
}

const BASE_URL = 'auth/'
const STORAGE_KEY = 'loggedinUser'


async function login(credentials) {
    try {
        const user = await httpService.post(BASE_URL + 'login', credentials)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        return user
    } catch (err) {
        console.log('Could not login')
        throw err
    }
}

async function signup(credentials) {
    try {
        const user = await httpService.post(BASE_URL + 'signup', credentials)
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        return user
    } catch (err) {
        console.log('Could not signup')
        throw err
    }
}

async function logout() {
    try {
        await httpService.post(BASE_URL + 'logout')
        sessionStorage.removeItem(STORAGE_KEY)
    } catch (err) {
        console.log('Could not logout')
        throw err
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null')
}