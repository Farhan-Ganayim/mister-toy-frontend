import { toyService } from '../../services/toy.service.js'
import { store } from '../store.js'
import {
    SET_TOYS,
    REMOVE_TOY,
    ADD_TOY,
    UPDATE_TOY
} from '../reducers/toy.reducer.js'

export function loadToys(filterBy) {
    return toyService.query(filterBy).then(toys => {
        store.dispatch({ type: SET_TOYS, toys })
        return toys
    })
}

export function removeToy(toyId) {
    return toyService.remove(toyId).then(() => {
        store.dispatch({ type: REMOVE_TOY, toyId })
    })
}

export function saveToy(toy) {
    const actionType = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy).then(savedToy => {
        store.dispatch({ type: actionType, toy: savedToy })
        return savedToy
    })
}
