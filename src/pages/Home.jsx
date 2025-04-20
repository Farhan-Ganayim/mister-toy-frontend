import { Link } from 'react-router-dom'
import toyImg from '../assets/img/Toys.png'

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
            {/* <img
                src={toyImg}
                alt="Toys Img"
            /> */}
        </section>
    )
}
