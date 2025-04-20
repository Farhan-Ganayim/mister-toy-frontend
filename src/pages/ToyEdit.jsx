import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toyService } from '../services/toy.service.js'
import { saveToy } from '../store/actions/toy.actions.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function ToyEdit() {
    const { toyId } = useParams()
    const navigate = useNavigate()
    const [toy, setToy] = useState(toyService.getEmptyToy())

    useEffect(() => {
        if (!toyId) return
        toyService.getById(toyId).then(setToy)
            .catch(err => {
                console.log('Had issues in toy edit:', err)
                navigate('/toy')
                showErrorMsg('Toy not found!')
            })
    }, [toyId])

    function handleChange({ target }) {
        const { name, value, type, checked } = target
        let val = type === 'checkbox' ? checked : value
        if (name === 'price') val = +val || ''
        setToy(prev => ({ ...prev, [name]: val }))
    }

    function onSaveToy(ev) {
        ev.preventDefault()
        saveToy(toy)
            .then((toy) => {
                showSuccessMsg(`Toy ${toy._id} saved`)
                navigate('/toy')
            })
            .catch(() => showErrorMsg('Problem saving toy'))
    }

    return (
        <section className="toy-edit">
            <h2>{toyId ? 'Edit Toy' : 'Add Toy'}</h2>

            <form onSubmit={onSaveToy}>
                <label>Name:</label>
                <input
                    name="name"
                    value={toy.name}
                    onChange={handleChange} />

                <label>Price:</label>
                <input name="price"
                    type="number"
                    value={toy.price}
                    onChange={handleChange} />

                <label>
                    <input
                        name="inStock"
                        type="checkbox"
                        checked={toy.inStock}
                        onChange={handleChange} />
                    In stock
                </label>

                <button>Save</button>
            </form>
        </section>
    )
}
