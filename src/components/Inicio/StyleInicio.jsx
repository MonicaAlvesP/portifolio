import styled from "styled-components";

const Init = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80vh;

@media(min-width: 320px) and (max-width: 768px){
    height: 100vh;

    img{
        width: 70vh;
    }

    h2, p{
    font-size: 1.2rem;
    align-items: center;
    }
}   
`

const Foto = styled.img`
    width: 40%;
    border-radius: 50%;
`

const RedesSociais = styled.div`
    width: 45vw;
    display: flex;
    justify-content: space-evenly;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    color: aliceblue;

@media(min-width: 320px) and (max-width: 768px){

    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    img{
        width: 30%;
    }

    h2,p{
        font-size: 1.2rem;
        text-align: center;
    }
}
`
