import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>Tasks App</h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/tasks">Tasks</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
