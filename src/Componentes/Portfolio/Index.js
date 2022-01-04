/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import './Index.css'
import React, { useEffect, useState } from 'react'
import Projetos from './Projetos.js'


export default function Portfolio(){

    const [slide, setSlide] = useState(1)
    const [imagem, setImagem] = useState()
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()
    const [url, setUrl] = useState()
    const [project, setProjeto] = useState([])
    
    //Quantidade de projetos
    const lenObeject = Projetos.length

    //largura dos container em que ficam os marcadores
    const lenWidth = lenObeject*22.75

    //Função para voltar pro projeto anterior
    const backProject = () =>{
        if(slide === 1){
            setSlide(lenObeject)
            
        }
        else{
            setSlide(slide-1)

        }
    }

    //função para ir para o próximo projeto
    const nextProject = () =>{
        if(slide === lenObeject){
            setSlide(1)
        }
        else{
            setSlide(slide+1)
        }
    }

    //Atualiza o estado dos elementos que variam em cada projeto.
    useEffect(()=>{

        let divMark = document.getElementById('container-mark');
        while (divMark.firstChild) {
            divMark.removeChild(divMark.lastChild);
        }

        divMark.style.width = lenWidth.toString()

        Projetos.map((projeto, i)=>{
            let ind = i+1
            if(slide === ind){

                setImagem(projeto.imagem)
                setProjeto(projeto)
                
            }

            
            if(slide === ind){
                let mark = document.getElementById('container-mark')
                let div = document.createElement('div')
                div.classList.add('mark-selected')
                mark.appendChild(div)
            }
            else{
                let mark = document.getElementById('container-mark')
                let div = document.createElement('div')
                div.classList.add('mark')
                mark.appendChild(div)
            }

        })

    },[slide])

    const updateContent = () =>{
       
        setTitulo(project.titulo)
        setDescricao(project.descricao)
        setUrl(project.url)

        let container = document.getElementById('container-portfolio')
                container.animate([
                    // keyframes
                    { opacity: '0' },
                    { opacity: '1' }
                ], {
                    // timing options
                    duration: 2000
                })

         }

    return(
        <section id='portfolio' className='section-portfolio'>
            <div className='portfolio'>

                <div className='arrow-to-left'onClick={()=>backProject()}><h1>&lt;</h1></div>

                <div id='container-portfolio' className='container-portfolio'>
                    <div className='div-project'>
                        <div className='block-image-project'>
                            <img className='image-project' src={imagem}  onLoad={()=>updateContent()} alt='Imagem de projeto para portfólio de Jefferson Lobato'/>
                        </div>
                        <div className='block-text-project'>
                            <h3>{titulo}</h3>
                            <p>{descricao}</p>
                        </div>
                    </div>
                    <div className='button-saiba-mais'>
                        <a href={url} target='_blank'><button className='saiba-mais-project'>Saiba mais</button></a>
                    </div>
                </div>

                <div className='arrow-to-right' onClick={()=>nextProject()}><h1>&gt;</h1></div>

            </div>

            <div className='div-mark'>
                <div id='container-mark' className='container-mark'>
                
                </div>
            </div>

        </section>

    )
        
}