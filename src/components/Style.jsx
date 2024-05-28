import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  height: 12vh;
  background-attachment: fixed;
  background-color: black;
  z-index: 1000;

  img {
    height: 15vh;
    align-items: center;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20vw;

a{
  font-family: "Roboto";
  text-decoration: none;
  color: #ffefff;
  font-size: 1.8rem;
  font-weight: 200;
}

  a:hover{
    color: #d9c0d8;
    text-shadow: 0px 1px 10px violet;
    font-weight: 600;
}

  li{
    list-style: none;
    margin: 1rem;
}
`