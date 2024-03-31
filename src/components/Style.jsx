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