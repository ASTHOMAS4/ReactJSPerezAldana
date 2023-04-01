import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import logotienda from '../../assets/img/logotiendacontitulo.png'
import '../App.css'

export const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className='checkbtn'>
                        <i class="bi bi-list"></i>
                    </label>
                    <a href='#' class="enlace">
                        <img src={logotienda} alt='logodelatienda' className='logo' />
                    </a>
                    
                    <ul>
                        <li><a href='#' >INICIO</a></li>
                        <li><a href='#' >NOSOTROS</a></li>
                        <li><a href='#' >CATALOGO</a></li>
                        <li><a href='#' >REGISTRARSE</a></li>
                        <li><a href='#' className='menucarrito' ><CartWidget cantCarrito={3} /></a></li>
                    </ul>
                    
                </nav>
            </header>

        </>
    )
}
