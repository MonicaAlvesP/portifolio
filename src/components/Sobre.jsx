import React, { useState } from "react"
import VainaWeb from "../assets/icons/vnw sem fundo 1.svg"
import AdaTech from "../assets/icons/AdaTech.png"
import Udemy from "../assets/icons/Udemy.svg"

import Html from "../assets/icons/html.svg"
import JavaScript from "../assets/icons/java-script.svg"
import Css from '../assets/icons/css.svg'
import StyledComponents from '../assets/icons/StyledComponent.png'
import Git from '../assets/icons/git.svg'
import Python from '../assets/icons/python.svg'

import styled from "styled-components"

const Main = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: solid yellow;
`

const Section = styled.section`
    border: solid red;
    display: grid;
    grid-template-columns: '1fr 1fr';
    background-color: aliceblue;
`

const Imagens = styled.img`
    max-width: 80px;
    height: auto;
`

export default function Sobre() {

    const [estudos, setEstudos] = useState([
        { curso: "Desenvolvimento Front-end + AWS", imagem: VainaWeb },
        { curso: "Git e Versionamento", imagem: AdaTech },
        { curso: "JavaScript e TypeScript do básico ao avançado", imagem: Udemy }
    ])

    const [tecnologias, setTecnologias] = useState([
        { nome: "HTML", imagem: Html },
        { nome: "CSS", imagem: Css },
        { nome: "JavaScript", imagem: JavaScript },
        { nome: "Styled-Components", imagem: StyledComponents },
        { nome: "Github", imagem: Git },
        { nome: "Pyhton", imagem: Python }
    ]
    )

    return (
        <Main>
            <Section>
                <h2>ESTUDOS</h2>
                {estudos.map((estudos) => (
                    <div>
                        <h3>{estudos.curso}</h3>
                        <img src={estudos.imagem} alt="Cursos" />
                    </div>
                ))}

            </Section>

            <Section>
                <h2>HABILIDADES</h2>
                {tecnologias.map((habilidades) => (
                    <div>
                        <h3>{habilidades.nome}</h3>
                        <Imagens src={habilidades.imagem} alt="Tecnologias" />
                    </div>
                ))}
            </Section>
        </Main>
    )
}