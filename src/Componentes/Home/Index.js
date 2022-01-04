/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import './Index.css'
import FundoMP4 from './Videos/fundo_home.mp4'
import Logo from './Images/logo.png'
import LogoInsta from './Images/instagram.png'
import LogoGit from './Images/github.png'
import LogoYT from './Images/youtube.png'
import LogoLink from './Images/linkedin.png'
import { Link } from "react-scroll"

export default function Home(){

    return(
        <section id='home' className='home'>

            <video className='video-background' src={FundoMP4} autoPlay={true} loop muted/>
            <div className='background-opacity-horizontal'></div>
            <div className='background-opacity-vertical'></div>

            <div className='home-container'>
                
                <div className='titulo-home'>
                    <img className='logo' src={Logo}  alt='Logo da marca Jefferson Lobato'/>
                    <h1>Jefferson Lobato</h1>
                    <h3>Desenvolvedor Fullstack</h3>
                    <div className='redes-sociais'>
                        <a href='https://www.linkedin.com/in/jeffelobato/' target='_blanck'><img className='logo-redes logo-linkedin' src={LogoLink}  alt='Logo do linkedin de Jefferson Lobato'/></a>
                        <a href='https://www.instagram.com/jeffelobato' target='_blanck'><img className='logo-redes logo-instagram' src={LogoInsta}  alt='Logo do Instagram de Jefferson Lobato'/></a>
                        <a href='https://www.youtube.com/channel/UCDw7lzJT-Jj2G7NQuNALMrA' target='_blanck'><img className='logo-redes logo-youtube' src={LogoYT}  alt='Logo do Canal do Youtube de Jefferson Lobato'/></a>
                        <a href='https://github.com/JeffersonLobato' target='_blanck'><img className='logo-redes logo-githube' src={LogoGit}  alt='Logo do github de Jefferson Lobato'/></a>
                    </div>
                </div>
                
                <Link
                    className='saiba-mais'
                    to='sobre'
                    spy={true}
                    smooth={true}
                    duration={2000}
                >
                </Link>

            </div>

        </section>
    )
}