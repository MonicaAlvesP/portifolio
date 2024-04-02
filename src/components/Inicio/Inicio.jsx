import React, { useState } from "react"
import FotoPessoal from './img/Foto_de_Perfil.jpg'
import Instagram from './icon/instagram-alt.svg'
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
        <main>
            <section>
                <img src={FotoPessoal} alt="" />
                <div>
                    <h2>Olá, me chamo Mônica!</h2>
                    <p>Bem-vindo ao meu portfólio. Sou uma desenvolvedora de software apaixonada por criar soluções incríveis e impactantes.
                        Ao longo dos anos, adquiri habilidades em várias tecnologias e estou sempre em busca de aprender mais.
                        Sinta-se à vontade para explorar meu trabalho e entrar em contato comigo através das redes sociais abaixo.</p>
                </div>
                {apresentacao.map((redeSociais) => (
                    <div>
                        <a href={redeSociais.link}>
                            <img src={redeSociais.logo} alt="Minhas redes sociais" />
                        </a>
                    </div>
                ))}
            </section>
        </main>
    )
}