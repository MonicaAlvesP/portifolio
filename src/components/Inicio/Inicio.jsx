import React, { useState } from "react"
import FotoPessoal from './img/perfil.png'
import Instagram from './icon/instagram.svg'
import Linkedin from "./icon/linkedin.svg"
import Facebook from './icon/facebook.svg'

import * as S from './StyleInicio'

export default function Inicio() {

    const [apresentacao, setApresentacao] = useState([
        { link: "https://www.instagram.com/monicapereira.dev/", logo: Instagram },
        { link: "https://www.linkedin.com/in/monica-apereira/", logo: Linkedin },
        { link: "https://www.facebook.com/monicapereira.dev", logo: Facebook }
    ])

    return (
        <S.Inicial>
            <S.Info>
                <S.Foto src={FotoPessoal} alt="" />
                    <S.Apresentacao>
                    <h2>Olá, me chamo Mônica!</h2>
                    <p>Bem-vindo ao meu portfólio. Sou uma desenvolvedora de software apaixonada por criar soluções incríveis e impactantes.
                        Ao longo dos anos, adquiri habilidades em várias tecnologias e estou sempre em busca de aprender mais.
                        Sinta-se à vontade para explorar meu trabalho e entrar em contato comigo através das redes sociais abaixo.
                    </p>
                
                {apresentacao.map((redeSociais) => (
                        <a href={redeSociais.link}>
                            <S.Icones src={redeSociais.logo} alt="Minhas redes sociais" />
                        </a>
                ))}
                    </S.Apresentacao>
            </S.Info>
        </S.Inicial>
    )
}