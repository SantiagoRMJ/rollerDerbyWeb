import React from 'react'
import './Header.scss'
import NavBar from '../NavBar/NavBar'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <>
        <header className="Header">
            <img className="Header_logo" src={logo} alt="Logo" />
            <div className="Header_title">
                <h1>UNETE A NOSOTROS</h1>
            </div>    
        </header>
        <NavBar/>   
        </>
    )
}
