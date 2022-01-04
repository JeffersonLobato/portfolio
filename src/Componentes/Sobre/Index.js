/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "./Index.css"

export default function Sobre(){

  return(

    <section id='sobre' className='sobre'>
        <div className='bloco-imagem-sobre'>
            <div className='imagem-sobre'></div>
        </div>

        <div className='bloco-texto-sobre'>
            <h2>Jefferson Lobato</h2>
            <p>Possui Graduação Tecnológica em Análise e Desenvolvimento de Sistemas, 
                é programador FullStack e utiliza como linguagens principais para seus projetos JavaScript com React JS e React Native, Python e PHP.
            </p>
            <p>
                Em seu canal no <a href='https://www.youtube.com/channel/UCDw7lzJT-Jj2G7NQuNALMrA' target='_blank'>Youtube</a>,
                demonstra seu nível de conhecimento através do ensino de programação, em seu canal já existe um Curso Completo de 
                Python com mais de 100 aulas.
            </p>
        </div>

    </section>

  )
}