import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toyService } from '../services/toy.service.js'

export function ToyDetails() {
    const { toyId } = useParams()
    const navigate = useNavigate()
    const [toy, setToy] = useState(null)

    useEffect(() => {
        toyService.getById(toyId)
            .then(setToy)
            .catch(() => navigate('/toy'))
    }, [toyId])

    if (!toy) return <div>Loading…</div>

    return (
        <section className="toy-details-container">

            <section className="toy-details">
                <h2>{toy.name}</h2>
                <img src={`https://api.dicebear.com/8.x/bottts/png?seed=${(toy.name)}`} alt={toy.name} />
                <p>Price: ${toy.price}</p>
                <p>{toy.inStock ? 'Currently in stock' : 'Out of stock'}</p>
                <p>Labels: {toy.labels.join(', ')}</p>
            </section>

        </section>
    )
}
