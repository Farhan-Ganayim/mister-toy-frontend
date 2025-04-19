import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const TOY_KEY = 'toyDB'

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
_createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    getToyLabels,
    getDefaultFilter,
    getFilterFromSearchParams,

}

function query(filterBy = {}) {
    return storageService.query(TOY_KEY)
        .then(toys => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                toys = toys.filter(toy => regExp.test(toy.txt))
            }

            return toys
        })
}

function getById(toyId) {
    return storageService.get(TOY_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(TOY_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        toy.updatedAt = Date.now()
        return storageService.put(TODO_KEY, toy)
    } else {
        toy.createdAt = toy.createdAt = Date.now()

        return storageService.post(TOY_KEY, toy)
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
    return Promise.resolve(labels)
}


function getDefaultFilter() {
    return {
        txt: '',
        inStock: null,
        labels: [],
        pageIdx: 0,
    }
}

function getFilterFromSearchParams(searchParams) {
    const defaultFilter = getDefaultFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }
    return filterBy
}

function _createToys() {
    let toys = utilService.loadFromStorage(TOY_KEY)
    if (toys && toys.length) return

    toys = []
    const names = ['Talking Doll', 'Wooden Puzzle', 'Box Game', 'Baby Rattle']
    const labelOptions = [
        'On wheels', 'Box game', 'Art', 'Baby',
        'Doll', 'Puzzle', 'Outdoor', 'Battery Powered'
    ]

    for (let i = 0; i < 20; i++) {
        const name = names[utilService.getRandomIntInclusive(0, names.length - 1)]
        const price = utilService.getRandomIntInclusive(20, 200)
        const toy = _createToy(name + ' ' + (i + 1), price, labelOptions)
        toys.push(toy)
    }

    utilService.saveToStorage(TOY_KEY, toys)
}

function _createToy(name, price, labels) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels: _getRandomLabels(labels),
        createdAt: Date.now() -
            utilService.getRandomIntInclusive(0, 1000 * 60 * 60 * 24 * 5),
        inStock: Math.random() > 0.3
    }
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

