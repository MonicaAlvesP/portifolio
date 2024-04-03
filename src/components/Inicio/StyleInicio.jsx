import styled from "styled-components";

export const Inicial = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;

@media(min-width: 320px) and (max-width: 768px){
    height: 120vh;

    img{
        width: 20vh;
    }

    h2, p{
    font-size: 1.2rem;
    align-items: center;
    }
}   
`
export const Info = styled.section`
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 30px;


@media(min-width: 330px) and (max-width: 768px){
    height: 115vh;
    width: 45vh;
    flex-direction: column;
}
`

export const Apresentacao = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: aliceblue;


h2{
    font-size: 1.5rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: coral;
}

p{
    margin: 2rem;
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

@media(min-width: 320px) and (max-width: 768px){
    height: 60vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    img{
        width: 40px;
    }

    h2{
        font-size: 2rem
        text-align: center;
    }

    p {
        font-family: sans-serif;
        font-size: 1.3rem;
    }
}
`

export const Icones = styled.img`
    width: 6vh;
`

export const Foto = styled.img`
    width: 30%;
    border-radius: 50%;
    margin: 2rem;
`
