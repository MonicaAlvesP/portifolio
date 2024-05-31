import React, { useState } from "react";
import Cruzeiro from "./img/cruzeiro.svg"
import Banda from "./img/Banda_Rouge.svg"
import Cartoon from "./img/Pagina_Cartoon.svg"
import Patrocinadores from "./img/Patrocinadores.svg"
import PagStrangerThings from "./img/Mundo Normal.svg"
import Calculadora from "./img/Calculadora.png"
import NLWCopa from "./img/Card Copa.png"
import Enigmax from './img/Enigmax.png'

import ComponenteComProps from "./ComponentComProps"

import * as S from './StyledProjetos'

export default function Projetos() {
    return (
        <S.Container>
            <S.Titulo>
                <h1>- Projetos com html e css -</h1>
            </S.Titulo>

            <S.Projetos>
                <S.Componentes>
                    <ComponenteComProps
                    imagem={PagStrangerThings}
                    titulo="Mundo Invertido">
                    <h3>Estruturação de pag, posisionamentos, DOM, Firebase</h3>
                    <p>HTML, CSS, JAVASCRIPT, FIREBASE</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                    imagem={Calculadora}
                    titulo="Calculadora Simples">
                    <h3>Váriaveis e Condicionais</h3>
                    <p>HTML, CSS E JAVASCRIPT</p>
                    </ComponenteComProps>
                    
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                    imagem={NLWCopa}
                    titulo="Next Level Week copa">
                        <h3>NLW COPA CARD</h3>
                        <p>HTML, CSS, DOM</p>
                    </ComponenteComProps>
                </S.Componentes>

            </S.Projetos>

        <S.Titulo>
            <h1>- Projetos em JavaScript e React -</h1>
        </S.Titulo>

            <S.Projetos>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Cruzeiro}
                        titulo="Cruzeiro">
                        <h3>VARIÁVEIS E CONDIÇÕES</h3>
                        <p>JAVASCRIPT - LÓGICA DA PROGRAMAÇÃO</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Banda}
                        titulo="Banda">
                        <h3>ARRAY E MÉTODOS</h3>
                        <p>JAVASCRIPT - LÓGICA DA PROGRAMAÇÃO</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Cartoon}
                        titulo="Cartoon">
                        <h3>PROJETO BASEADO NO SITE CARTOON NETWORK</h3>
                        <p>REACT, STYLED-COMPONENTS, RESPONSIVO, HOOK USESTATE</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Patrocinadores}
                        titulo="Patrocinadores">
                        <h3>USESTATE, USEEFFECT, DOM, STYLED-COMPONENTS</h3>
                        <p>JS,HOOKS, STYLED-COMPONENTS, DOM</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Enigmax}
                        titulo="Enigmax">
                        <h3>Projeto API de filmes</h3>
                        <p>JS,HOOKS, STYLED-COMPONENTS, API</p>
                    </ComponenteComProps>
                </S.Componentes>
            </S.Projetos>


        </S.Container>
    )
}
