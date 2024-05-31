import React, { Children } from "react"
import styled from "styled-components"

const Props = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

h2{
    text-align: center;
    color: #838ca3;
    font-size: 1.3rem;
    font-weight: 200;
    font-family: 'Sacramento';
}

p{
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.7rem;
    color: aliceblue;
}

@media (max-width: 768px) {
        flex-direction: column; // Se necessário para telas menores
        align-items: center; // Se necessário para telas menores
    }
`

const Img = styled.img`
    max-width: 15rem;
    max-height: 10rem;
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