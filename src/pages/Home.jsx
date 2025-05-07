import { Link } from 'react-router-dom'
import toyImg from '../assets/img/toys.jpg'
export function HomePage() {
    return (
        <section className="home-page">
            <img src={toyImg} alt="" />
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
