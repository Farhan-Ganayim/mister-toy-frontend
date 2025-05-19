import { Link, NavLink } from "react-router-dom"
import { UserMsg } from "./UserMsg"
import { LoginSignup } from "./LoginSignup"
import { useSelector } from "react-redux"
import { logout } from "../store/actions/user.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

export function AppHeader() {

    const user = useSelector(storeState => storeState.userModule.loggedInUser)

    async function onLogout() {
        try {
            await logout()
            showSuccessMsg('Bye Bye')
        } catch (error) {
            showErrorMsg('OOPs try again')
        }
    }

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Mister Toy</h1>

                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/toy" >Toys</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </nav>
            </section>
            <UserMsg />
            {user ? (
                <section>
                    <span to={`/user/${user._id}`}>
                        Hello {user.fullname}
                    </span>
                    <button
                        className="btn btn-logout"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </section>
            ) : (
                <LoginSignup />
            )}
        </header>
    )
}
