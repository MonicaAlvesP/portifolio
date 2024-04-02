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

    a:hover{
        color: #663E7D;
        font-weight: 600;
    }

    li{
        list-style: none;
    }
`