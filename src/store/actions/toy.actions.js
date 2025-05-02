import { toyService } from '../../services/toy.service.js'
import { store } from '../store.js'
import {
    SET_TOYS,
    REMOVE_TOY,
    ADD_TOY,
    UPDATE_TOY,
    SET_FILTER_BY
} from '../reducers/toy.reducer.js'

export function loadToys() {
    const { filterBy } = store.getState().toyModule

    return toyService.query(filterBy)
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
            return toys
        })
        .catch(err => {
            console.log('toy action -> Cannot load toys')
            throw err
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            console.log('toy action -> Cannot remove toy', err)
            throw err
        })
}

export function saveToy(toy) {
    const actionType = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy).then(savedToy => {
        store.dispatch({ type: actionType, toy: savedToy })
        return savedToy
    })
}

export function setFilter(filterBy = toyService.getDefaultFilter()) {
    store.dispatch({ type: SET_FILTER_BY, filterBy: filterBy })
}
