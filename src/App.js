import React from "react"
import Home from "./Componentes/Home/Index.js"
import Menu from "./Componentes/Menu/Index.js"
import Sobre from "./Componentes/Sobre/Index.js"
import Portfolio from "./Componentes/Portfolio/Index.js"
import Contatos from "./Componentes/Contatos/Index.js"
import Foot from "./Componentes/Footer/Index.js"
import Banner from "./Componentes/Banner/Index.js"

export default function App(){

  return(

    <body>

        <Banner/>
        <Menu/>
        <Home/>
        <Sobre/>
        <Portfolio/>
        <Contatos/>
        <Foot/>

        

    </body>

  )
}