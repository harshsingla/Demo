import React from 'react'
import {Navbar, NavLink} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Navmenue = (props) => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                <NavLink>
                    <Link to="/">
                        Home
                    </Link>
                </NavLink>
                <NavLink>
                    <Link to="/about" >About</Link>
                </NavLink>
                <NavLink>
                    <Link to="/contact" >Contact Us</Link>
                </NavLink>
                <NavLink>
                    <Link to="/projects" >Projects</Link>
                </NavLink>
                <NavLink>
                    <Link to="/career" >Career</Link>
                </NavLink>
            </Navbar>
        </div>
    )
}

export default Navmenue
