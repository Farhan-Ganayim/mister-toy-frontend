import { Link } from 'react-router-dom'
import { MultiSelect } from '../cmps/MultiSelect'

export function HomePage() {
    return (
        <section className="home-page">
            <div className='home-page-welcome'>
                <h1>welcome to our toy store  </h1>
                <Link to='/toy/'>
                    <button>
                        Explore Toys
                    </button>
                </Link>
            </div>
        </section>
    )
}
