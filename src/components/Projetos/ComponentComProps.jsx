import React, { Children } from "react"
import styled from "styled-components"

const Props = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

h2{
    text-align: center;
    color: #08E7E7;
}

p{
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.7rem;
    color: aliceblue;
}
`

const Img = styled.img`
    height: 22vh;
    width: 10vw;
`


export default function ComponenteComProps({ imagem, titulo, children }) {
    return (
        <Props>
            <Img src={imagem} />
            <h2>{titulo}</h2>
            {children}
        </Props>
    )
}