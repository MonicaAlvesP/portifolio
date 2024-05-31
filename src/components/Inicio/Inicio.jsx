import React, { useState } from "react"
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";


import * as S from './StyleInicio'

export default function Inicio() {

  return (
    <S.Inicial>
      <S.Info>
        <S.Foto src="https://media.licdn.com/dms/image/D4D03AQHkqvorfgx3Ig/profile-displayphoto-shrink_800_800/0/1713963344035?e=1721260800&v=beta&t=M4-wS6cGxt00_qo680dWFgS_xhG62vaa0_hJ4R5WW4s" alt="Foto pessoal" />
        <S.Apresentacao>
          <h1>Mônica Alves Pereira</h1>
          <h3>| Desenvolvedora Fullstack |</h3>
          <br />
          <p>Desenvolvedora Fullstack Guarulhos-SP, Brasil, cursando Análise e Desenvolvimento de Sistemas, meus primeiros contatos com tecnologia foi na adolescência, mas meu primeiro "Hello World" foi em 2021.
            Apaixonada por tecnologia e designer, meus hobbies favoritos são ler, jogar, e maquiar.</p>
          <S.Link>
            <li> <a href="https://www.instagram.com/monicapereira.dev/"><CiInstagram /></a> </li>
            <li> <a href="https://www.linkedin.com/in/monica-apereira/"><CiFacebook /> </a> </li>
            <li> <a href="https://www.facebook.com/monicapereira.dev"><CiLinkedin /></a> </li>
          </S.Link>
        </S.Apresentacao>

      </S.Info>
    </S.Inicial>
  )
}