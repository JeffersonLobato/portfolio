/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Index.css'
import React from 'react'
import Instagram from './Images/logo-instagram.png'
import Linkedin from './Images/logo-linkedin.png'
import Email from './Images/logo-email.png'

export default function Contatos(){
    return(
        <section id='contatos' className='contatos'>
            <div className='info-contato'>
                <img className='logo-contato' src={Email}  alt='Logo do email de Jefferson Lobato'/>
                <a href='mailto:contato@jeffelobato.com?subject=Vi seu portfólio&body=Olá, vi seu portfólio e gostaria de saber mais.' target='_blank'><span>contato@jeffelobato.com</span></a>
            </div>

            <div className='info-contato'>
                <img className='logo-contato' src={Instagram}/>
                <a href='https://www.instagram.com/jeffelobato' target='_blank'  alt='Logo do Instagram de Jefferson Lobato'><span>Instragram.com/jeffelobato</span></a>
            </div>

            <div className='info-contato'>
                <img className='logo-contato' src={Linkedin} alt='Logo do linkedin de Jefferson Lobato'/>
                <a href='https://www.linkedin.com/in/jeffelobato' target='_blank'><span>Linkedin.com/in/jeffelobato</span></a>
            </div>

        </section>
    )
}