import styled from "styled-components";

export const Container = styled.main`
  background-color: #1f1f1f;

  img {
      height: 8rem;
      width: 6rem;
    }
`

export const Projetos = styled.section`
    display: flex;
    justify-content: space-around;

@media(min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

export const Componentes = styled.div`
    width: 25rem;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: -1em 0 .4em black;
    border-radius: 30px;
    margin: 2rem;

h3{
    color: #ad4d8a;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 200;
}

@media(min-width: 320px) and (max-width: 768px) {
    width: 90%;
    height: 45vh;
    margin: 1rem;

    img{
        width: 30vh;
        height: 30vh;
    }
}
`

export const Titulo = styled.div`
    text-align: center;
    font-family: "Sacramento";
    font-weight: 200;
    color: #829fc5;
    padding: 1rem;

    @media(min-width: 320px) and (max-width: 768px) {
        font-weight: 200;
        padding: 2rem;
    }
`