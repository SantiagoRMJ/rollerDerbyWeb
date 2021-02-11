import React from 'react'
import './Header.scss'
import '../../styles.scss'
import NavBar from '../NavBar/NavBar'
import logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <>
        <header className="header">
            {/*<img className="Header_logo" src={logo} alt="Logo" />*/}
            <div className="header-main-image">
            <h2>Únete a nosotros</h2>
                {/*<h1>ÚNETE A NOSOTROS</h1>*/}
            </div>    
        </header>
        <NavBar/>   
        </>
    )
}
