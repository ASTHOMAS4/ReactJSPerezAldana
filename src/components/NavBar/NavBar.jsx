import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import logotienda from '../../assets/img/logotiendacontitulo.png'
import '../App.css'
import { DarkModeButton } from './DarkModeButton/DarkModeButton.jsx'
export const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className='checkbtn'>
                        <i className="bi bi-list"></i>
                    </label>
                    <a href='#' className="enlace">
                        <img src={logotienda} alt='logodelatienda' className='logo' />
                    </a>
                    
                    <ul>
                        //aca estarán las rutas para los extras como mi proyecto personal
                        // por eso el nav secundario funciona como Nav principal.
                        <li><a href='#' >INICIO</a></li>
                        <li><a href='#' >NOSOTROS</a></li>
                        <li><a href='#' >CATALOGO</a></li>
                        <li><a href='#' >REGISTRARSE</a></li>
                        <li><span className='menucarrito' ><CartWidget /></span></li>
                        <DarkModeButton />
                    </ul>
                    
                </nav>
            </header>

        </>
    )
}
