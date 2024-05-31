import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  background-attachment: fixed;
  background-color: #1f1f1f;  /* Fundo principal */
  z-index: 1000;
  padding: 0 20px;

  img {
    height: 15vh;
  }

  h1 {
    font-size: 2rem;
    font-family: 'Sacramento', cursive;
    font-weight: 300;
    color: #fc036b; /* Cor de destaque principal */
    text-align: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      font-family: "Roboto", sans-serif;
      text-decoration: none;
      color: #f0f0f0; /* Cor de texto principal */
      font-size: 1.2rem;
      font-weight: 100;
      margin: 0 10px;
      transition: color 0.3s, box-shadow 0.3s;

      &:hover {
        color: #ff69b4; /* Cor de hover/ativo */
        box-shadow: 0px 1px 0px #ff69b4;
      }
    }
  }

  button {
    display: none;
    background-color: transparent;
    border: none;
    color: #fc036b; /* Cor de destaque principal */
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #ff69b4; /* Cor de hover/ativo */
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    ul {
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background-color: #1f1f1f; /* Fundo principal */
      padding: 0;
      justify-content: flex-start;
    }

    button {
      display: block;
    }
  }
`;
