import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.scss'

export default function NavBar() {
    return (
        <div className="NavBar">
            <Link className="NavBar_element">INICIO</Link>
            <Link className="NavBar_element">EQUIPO</Link>
            <Link className="NavBar_element">CONTACTO</Link>
        </div>
    )
    }