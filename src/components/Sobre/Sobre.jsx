import React, { useState } from "react"
import VainaWeb from "./icons/vnw sem fundo 1.svg"
import AdaTech from "./icons/AdaTech.png"
import Udemy from "./icons/Udemy.svg"


import Html from "./icons/html.svg"
import JavaScript from "./icons/java-script.svg"
import Css from './icons/css.svg'
import StyledComponents from './icons/StyledComponent.png'
import Git from './icons/git.svg'
import Python from './icons/python.svg'
import * as S from "./StyleSobre"


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
        <S.Sobre>
            <S.Estudos>
                <h1>ESTUDOS</h1>
                {estudos.map((estudos) => (
                    <div>
                        <h3>{estudos.curso}</h3>
                        <img src={estudos.imagem} alt="Cursos" />
                    </div>
                ))}
            </S.Estudos>

            <S.Habilidades>
                <h1>HABILIDADES</h1>
                {tecnologias.map((habilidades) => (
                    <div>
                        <h3>{habilidades.nome}</h3>
                        <img src={habilidades.imagem} alt="Tecnologias" />
                    </div>
                ))}
            </S.Habilidades>
        </S.Sobre>
    )
}