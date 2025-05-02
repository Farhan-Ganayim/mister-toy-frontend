import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadToys, removeToy, setFilter } from '../store/actions/toy.actions.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { toyService } from '../services/toy.service.js'
import { ToyList } from '../cmps/ToyList.jsx'

export function ToyIndex() {
    const toys = useSelector(state => state.toyModule.toys)
    const filterBy = useSelector(state => state.toyModule.filterBy)
    // const [filterBy, setFilterBy] = useState(toyService.getDefaultFilter())
    const [toyLabels, setToyLabels] = useState()

    useEffect(() => {
        loadToys(filterBy).catch(() => showErrorMsg('Cannot load toys'))
        
        setToyLabels(toyService.getToyLabels())

    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilter(filterBy)
    }

    const labelsCount = toyService.getToyLabelData()
    console.log("🚀 ~ ToyIndex ~ labelsCount:", labelsCount)
    

    function onRemoveToy(toyId) {
        removeToy(toyId)
            .then(() => showSuccessMsg('Toy removed'))
            .catch(err => {
                console.log('Cannot remove toy', err)
                showErrorMsg('Cannot remove toy')
            })
    }

    if (!toys) return <div>Loading…</div>

    return (
        <section className="toy-index">
            <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} toyLabels={toyLabels} />
            <h2>Toys</h2>
            <ToyList
                toys={toys}
                onRemoveToy={onRemoveToy}
            />
        </section>
    )
}
