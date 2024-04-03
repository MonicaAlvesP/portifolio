import styled from "styled-components";



export const Projetos = styled.section`
    display: flex;
    justify-content: space-around;
    margin-bottom: 8vh;

@media(min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

export const Componentes = styled.div`
    width: 18vw;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 30px;

h3{
    color: #FF0D3A;
    padding-top: 1vh;
    text-align: center;
}

@media(min-width: 320px) and (max-width: 768px) {
    width: 45vh;
    height: 45vh;
    margin-top: 8vh;

    img{
        width: 30vh;
        height: 30vh;
    }
}
`

export const Titulo = styled.div`
    height: 10vh;

h1{
    text-align: center;
    margin-top: 8vh;
    color: aliceblue;
    text

}

@media(min-width: 320px) and (max-width: 768px) {
    font-size: 1rem;
}
`