import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Header = () => {
    return (
        <div>
            <nav>
                <h1>Navbar</h1>
                <div className='nav-links'>
                    {routes.map(({ path, label }, index) => (
                        <Link key={index} to={path} className="nav-link">
                            {label}
                        </Link>))}
                </div>
            </nav>
        </div>
    )
}

export default Header
