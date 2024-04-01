import React, { useState } from "react"
import FotoPessoal from '../assets/img/Foto_perfil.svg'
import Instagram from '../assets/icons/instagram-alt.svg'
import Linkedin from "../assets/icons/linkedin.svg"
import Facebook from '../assets/icons/facebook.svg'
import styled from "styled-components"

const Saudacao = styled.section`
    display: flex;
    justify-content: center;
    margin: 2rem;
`

const Container = styled.div`
    margin: 1rem;
    max-width: 100vh;
    background-color: rgba(8, 38, 57, 0.9);
    display: flex;
    color: white;
    border-radius: 40px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`


const Foto = styled.img`
    max-width: 25%;
    height: auto;
    margin-left: 1rem;
`

const Box = styled.div`
    display: flexbox;
    margin-top: 1rem;
    padding: 2rem;

p {
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
}
`

const Logo = styled.img`
    margin-top: 1rem;
    max-width: 3rem;
`


export default function Inicio() {

    const [apresentacao, setApresentacao] = useState([
        { link: "https://www.instagram.com/monicapereira.dev/", logo: Instagram },
        { link: "https://www.linkedin.com/in/monica-apereira/", logo: Linkedin },
        { link: "https://www.facebook.com/monicapereira.dev", logo: Facebook }
    ])

    return (
        <Saudacao>
            <Container>
                <Foto src={FotoPessoal} alt="" />
                <Box>
                <h2>Olá, me chamo Mônica!</h2>
                <p>Bem-vindo ao meu portfólio. Sou uma desenvolvedora de software apaixonada por criar soluções incríveis e impactantes.
                 Ao longo dos anos, adquiri habilidades em várias tecnologias e estou sempre em busca de aprender mais.
                  Sinta-se à vontade para explorar meu trabalho e entrar em contato comigo através das redes sociais abaixo.</p>
                {apresentacao.map((redeSociais) => (
                    <a href={redeSociais.link}>
                        <Logo src={redeSociais.logo} alt="Minhas redes sociais" />
                    </a>
                ))}
                </Box>
            </Container>
        </Saudacao>
    )
}