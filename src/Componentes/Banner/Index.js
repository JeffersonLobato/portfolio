import React, { useEffect } from "react"
import './Index.css'
import ReactGA from 'react-ga'

export default function Banner(){

    const aceitarCookie = () => {
        sessionStorage.setItem('cookie', 'aceito')
        let banner = document.getElementById('banner-cookie')
        banner.style.display = 'none'

        if(sessionStorage.cookie === 'aceito'){  
            ReactGA.initialize('UA-186722327-2');
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }


    const recusarCookie = () => {
        sessionStorage.setItem('cookie', 'recusado')
        let banner = document.getElementById('banner-cookie')
        banner.style.display = 'none'
    }


    window.addEventListener("load", function() {
        if(sessionStorage.cookie){
            let banner = document.getElementById('banner-cookie')
            banner.style.display = 'none'
        }else{
            let banner = document.getElementById('banner-cookie')
            banner.style.display = 'block'
            banner.style.opacity = '1'
        }
    })

    useEffect(()=>{
        if(sessionStorage.cookie === 'aceito'){  
            ReactGA.initialize('UA-186722327-2');
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    }, [])

    return(

        <div id='banner-cookie' className='banner-cookie'>

            <button id='fechar-cookie' className='fechar-banner-cookie' onClick={() => recusarCookie()}><span>x</span></button>
            <h3>Aviso de privacidade!</h3>
            <p>Este site pode armazenar cookies no navegador para melhor expediência do usuário.</p>
            <p>Você permite o armazenamento de cookies em seu navegador?</p>
            <div className='botao-cookie'>
                <button id='aceitar-cookie' onClick={() => aceitarCookie()}>ACEITAR</button>
                <button id='recusar-cookie' onClick={() => recusarCookie()}>RECUSAR</button>
            </div>
        
        </div>
    )
}