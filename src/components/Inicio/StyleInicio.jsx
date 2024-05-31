import styled from "styled-components";

export const Inicial = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1f1f1f;
  color: #f0f0f0;
  padding: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const Apresentacao = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;

  h1 {
    font-family: 'Roboto';
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 200;
  }

  h3 {
    font-size: 1.5rem;
    color: #fc036b;
    margin-bottom: 10px;
    font-weight: 200;
    font-family: 'Sacramento';
  }

  p {
    font-size: 1rem;
    color: #b0b0b0;
  }
`;

export const Link = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    margin: 0 30px;

    a {
      color: #03fcf0;
      font-size: 1.5rem;
      transition: color 0.3s;

      &:hover {
        color: #ff69b4;
      }
    }
  }
`;

export const Foto = styled.img`
  height: 40vh;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px #fc036b;
  transition: box-shadow 0.3s;
  margin-bottom: 40px;

  &:hover {
    box-shadow: 0 0 20px 4px #ff69b4;
  }

  @media (min-width: 768px) {
    height: 55vh;
    margin-right: 40px;
  }
`;
