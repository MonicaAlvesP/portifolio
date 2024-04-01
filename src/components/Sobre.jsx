import React, { useState } from "react"
import VainaWeb from "../assets/icons/vnw sem fundo 1.svg"
import AdaTech from "../assets/icons/AdaTech.png"
import Udemy from "../assets/icons/Udemy.svg"

import Astronalta from "../assets/img/astronalta.png"

import Html from "../assets/icons/html.svg"
import JavaScript from "../assets/icons/java-script.svg"
import Css from '../assets/icons/css.svg'
import StyledComponents from '../assets/icons/StyledComponent.png'
import Git from '../assets/icons/git.svg'
import Python from '../assets/icons/python.svg'
import * as S from "./Style.jsx"


export default function Sobre() {

    const [estudos, setEstudos] = useState([
        { curso: "Desenvolvimento Front-end + AWS", imagem: VainaWeb },
        { curso: "Git e Versionamento", imagem: AdaTech },
        { curso: "JavaScript e TypeScript", imagem: Udemy }
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
        <S.Main>
            <S.Section>
                <h1>ESTUDOS</h1>
                {estudos.map((estudos) => (
                    <S.Div>
                        <h3>{estudos.curso}</h3>
                        <S.Imagens src={estudos.imagem} alt="Cursos" />
                    </S.Div>
                ))}
            </S.Section>

            <S.Section>
                <h1>HABILIDADES</h1>
                {tecnologias.map((habilidades) => (
                    <S.Div>
                        <h3>{habilidades.nome}</h3>
                        <S.Imagens src={habilidades.imagem} alt="Tecnologias" />
                    </S.Div>
                ))}
            </S.Section>
        </S.Main>
    )
}