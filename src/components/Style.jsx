import styled from "styled-components";

export const Navigation = styled.nav`
    background-color: #082639;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 15vh;

    a{
        text-decoration: none;
        color: tomato;
        font-size: 2rem;
        font-weight: 600;
    }

    a:hover{
        color: magenta;
        font-weight: 600;
    }

    li{
        list-style: none;
    }
`