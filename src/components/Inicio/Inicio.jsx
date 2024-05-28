import React, { useState } from "react"

import * as S from './StyleInicio'

export default function Inicio() {

  return (
    <S.Inicial>
      <S.Info>
        <S.Apresentacao>
          <h1>Mônica Alves Pereira</h1>
          <h3>| Desenvolvedora Fullstack |</h3>
        </S.Apresentacao>
        <S.Foto src="https://media.licdn.com/dms/image/D4D03AQHkqvorfgx3Ig/profile-displayphoto-shrink_800_800/0/1713963344035?e=1721260800&v=beta&t=M4-wS6cGxt00_qo680dWFgS_xhG62vaa0_hJ4R5WW4s" alt="Foto pessoal" />
      </S.Info>
    </S.Inicial>
  )
}