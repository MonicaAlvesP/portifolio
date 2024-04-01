import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: #082639;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 15vh;

    a{
        text-decoration: none;
        color: white;
        font-size: 2rem;
    }

    li{
        list-style: none;
    }
`

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
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    color: aliceblue;
    border-radius: 20px;

h1{
    text-align: center;
    padding: 5%;
}
`

export const Div = styled.div`
    height: 20%%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;

h3{
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
}
`

export const Imagens = styled.img`
    max-width: 7vh;
`