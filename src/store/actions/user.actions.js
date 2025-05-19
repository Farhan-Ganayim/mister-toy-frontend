import { showErrorMsg } from "../../services/event-bus.service"
import { userService } from "../../services/user.service"
import { SET_USER } from "../reducers/user.reducer"
import { store } from "../store"


export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({ type: SET_USER, user })
    } catch (err) {
        console.log('user actions -> Cannot login', err)
        showErrorMsg('Login failed')
        throw err
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({ type: SET_USER, user })
    } catch (err) {
        console.log('user actions -> Cannot signup', err)
        showErrorMsg('Signup failed')
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({ type: SET_USER, user: null })
    } catch (err) {
        console.log('user actions -> Cannot logout', err)
        showErrorMsg('Logout failed')
        throw err
    }
}