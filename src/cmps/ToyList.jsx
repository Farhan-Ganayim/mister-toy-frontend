import { Link } from 'react-router-dom'
import { ToyPreview } from './ToyPreview.jsx'

export function ToyList({ toys, onRemoveToy }) {
    if (!toys.length) return <p className="toy-empty">No toys to show…</p>

    return (
        <section className="toy-list">
            {toys.map(toy => (
                <li key={toy._id}>
                    <ToyPreview
                        key={toy._id}
                        toy={toy}
                        onRemove={onRemoveToy}
                    />
                    <div>
                        <button>
                            <Link to={`/toy/edit/${toy._id}`}>Edit</Link>
                        </button>
                        <button onClick={() => onRemoveToy(toy._id)}>Remove</button>
                    </div>
                </li>
            ))}
        </section>
    )
}
