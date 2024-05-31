import React from 'react'
import { DiCss3, DiGithub, DiJavascript1, DiPython } from "react-icons/di"
import { SiStyledcomponents } from "react-icons/si"


const Habilidades = () => {
  return (
    <section>
    <h2>HardSkills</h2>
      <ul>
        <li><DiJavascript1 /></li>
        <li><DiCss3 /></li>
        <li><SiStyledcomponents /></li>
        <li><DiGithub /></li>
        <li><DiPython /></li>
      </ul>
    </section>
  )
}

export default Habilidades