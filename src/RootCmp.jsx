

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { HomePage } from './pages/Home.jsx'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { About } from './pages/About.jsx'

import { Provider } from 'react-redux'
import { store } from './store/store.js'

import './assets/style/main.css'



export function RootCmp() {
    return (
        <Provider store={store}>

        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />

                        <Route path="/toy" element={<ToyIndex />} />
                    </Routes >
                </main>
            </section>

        </Router>
        </Provider>

    )
}