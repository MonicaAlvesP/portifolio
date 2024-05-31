import React, { useState } from "react"
import VainaWeb from "./icons/vnw sem fundo 1.svg"
import AdaTech from "./icons/AdaTech.png"
import Udemy from "./icons/Udemy.svg"
import Habilidades from './Habilidades'

import { Card } from './StyleSobre'

export default function Sobre() {

  const [estudos, setEstudos] = useState([
    { curso: "Desenvolvimento Front-end + AWS", imagem: VainaWeb },
    { curso: "Git e Versionamento", imagem: AdaTech },
    { curso: "JavaScript e TypeScript", imagem: Udemy }
  ])

  return (
    <Card>
      <section>
      <h2>Cursos</h2>
        {estudos.map((estudos) => (
          <div>
            <h3>{estudos.curso}</h3>
            <img src={estudos.imagem} />
          </div>
        ))}
      </section>
      <Habilidades />
    </Card>
  )
}