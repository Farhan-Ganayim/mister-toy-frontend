import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onRemove, onToggleStock }) {


    return (
        <Link to={`/toy/${toy._id}`}>
            <article className="toy-preview">
                <h4>{toy.name}</h4>
                {/* <img src={`https://unsplash.com/200x200/?${toy.name}` } alt={toy.name} /> */}
                <img
                    src={`https://api.dicebear.com/8.x/bottts/png?seed=${(toy.name)}`}
                    alt={toy.name}
                />
                <p className="price">${toy.price}</p>
                <p className={toy.inStock ? 'in-stock' : 'out-stock'}>
                    {toy.inStock ? 'In stock' : 'Out of stock'}
                </p>
            </article>
        </Link>

    )
}
