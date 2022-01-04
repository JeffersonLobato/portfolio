/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './Index.css'
import Hamburguer from "./Images/menu-hamburguer.png"
import Fechar from "./Images/fechar-menu.png"
import { Link } from "react-scroll"

export default function Menu(){

    const openMenu = () =>{
        let hamburguer = document.getElementById('menu-hamburguer')
        let fechar = document.getElementById('menu-fechar')
        let responsivo = document.getElementById('menu-responsivo')

        hamburguer.style.display = 'none'
        fechar.style.display = 'block'
        responsivo.style.display = 'block'

    }

    const closeMenu = () =>{
        let hamburguer = document.getElementById('menu-hamburguer')
        let fechar = document.getElementById('menu-fechar')
        let responsivo = document.getElementById('menu-responsivo')

        hamburguer.style.display = 'block'
        fechar.style.display = 'none'
        responsivo.style.display = 'none'
    }

    //fecha o menu responsivo em caso de clique fora dele
    window.addEventListener('click', (e) => {
        if(!document.getElementById('container-menu-responsivo').contains(e.target)){
            closeMenu()
        }
    })

    return(
        <nav className='menu'>

            <div className='menu-container'>
                <ul className='list-menu'>
                    <Link
                        activeClass='active'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li'
                    >
                        Home
                    </Link>

                    <Link
                        activeClass='active'
                        to='sobre'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li'    
                    >
                        Sobre
                    </Link>

                    <Link 
                        activeClass='active'
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li'
                    >
                        Portfólio
                    </Link>

                    <Link 
                        activeClass='active'
                        to='contatos'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li'
                    >
                        Contatos
                    </Link>
                </ul>
            </div>

            <div id='container-menu-responsivo' className='menu-responsivo'>
                    <img id='menu-hamburguer' className='menu-hamburguer' src={Hamburguer} onClick={()=>openMenu()}/>
                    <img id='menu-fechar' className='menu-fechar' src={Fechar} onClick={()=>closeMenu()}/>
                    <ul id='menu-responsivo' className='list-menu-responsivo'>
                    <Link
                        activeClass='active-responsivo'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li-responsivo'
                    >
                        Home
                    </Link>

                    <Link
                        activeClass='active-responsivo'
                        to='sobre'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li-responsivo'    
                    >
                        Sobre
                    </Link>

                    <Link 
                        activeClass='active-responsivo'
                        to='portfolio'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li-responsivo'
                    >
                        Portfólio
                    </Link>

                    <Link 
                        activeClass='active-responsivo'
                        to='contatos'
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='list-menu-li-responsivo'
                    >
                        Contatos
                    </Link>
                    </ul>
            </div>

        </nav>
    )
}