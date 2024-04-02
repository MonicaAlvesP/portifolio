import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
export const Section = styled.section`
    display: flexbox;
    justify-content: center;
    margin: 2rem;
    width: 25%;
    height: 45%;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: aliceblue;
    border-radius: 25px;

h1{
    text-align: center;
    padding: 5%;
}
`

export const Div = styled.div`
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5%;
    padding: 0 5vh;

h3{
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
@media only screen and (max-width: 600px) {
    font-size: 0.8rem;
}
}
`

export const Imagens = styled.img`
    max-width: 7vh;

@media only screen and (max-width: 600px) {
    max-width: 5vh;
}
`