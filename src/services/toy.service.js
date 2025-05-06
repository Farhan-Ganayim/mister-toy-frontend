import { httpService } from "./http.service"

const BASE_URL = 'toy/'
const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
]

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    getToyLabels,
    getToyLabelData,
    getDefaultFilter,
    // getFilterFromSearchParams,

}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        labels: _getRandomLabels(),
        inStock: true
    }
}

function getToyLabels() {
    // return Promise.resolve(labels)
    return labels
}

function getToyLabelData() {
    return query().then(toys => {
        const labelData = {}
        toys.forEach(toy => {
            toy.labels.forEach(label => {
                if (!labelData[label]) labelData[label] = { total: 0, inStock: 0, sumPrice: 0 }
                labelData[label].total++
                labelData[label].sumPrice += toy.price
                if (toy.inStock) labelData[label].inStock++
            })
        })
        return labelData
    })
}

function _getRandomLabels() {
    const labelsCopy = [...labels]
    const randomLabels = []
    for (let i = 0; i < 2; i++) {
        const idx = Math.floor(Math.random() * labelsCopy.length)
        randomLabels.push(labelsCopy.splice(idx, 1)[0])
    }
    return randomLabels
}

function getDefaultFilter() {
    return {
        txt: '',
        inStock: undefined,
        labels: [],
        pageIdx: 0,
    }
}