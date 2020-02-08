import React from "react"
import {Link} from 'react-router-dom'

function Navigation(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About Me</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
