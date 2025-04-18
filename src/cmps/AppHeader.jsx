import { Link, NavLink } from "react-router-dom";
import { UserMsg } from "./UserMsg";


export function AppHeader() {



    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Toys App</h1>

                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </nav>
            </section>
            <UserMsg />
        </header>
    )
}
