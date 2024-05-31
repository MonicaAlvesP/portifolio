import styled from 'styled-components'

export const Card = styled.main`
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;   
  height: 90vh;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 80vw;
    margin: 50px;
    box-shadow: -1em 0 .4em black;
  }

  h3{
    color: #ff69b4;
    font-family: 'Roboto';
    font-weight: 200;
    padding-bottom: 30px;
  }

  h2 {
    font-family: 'Sacramento';
    font-weight: 200;
    font-size: 2rem;
    color: #829fc5;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  li {
    list-style: none;
    font-size: 3rem;
    margin: 20px;
    color: #fc036b;
  }

  @media(min-width: 320px) and (max-width: 768px) {
    width: 100vw;
    height: 115vh;

  section {
    width: 90vw;
    margin: 20px;
    padding: 20px;
    height: 90vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h2 {
    margin-bottom: 40px;
  }

  li {
    width: 7vw;
  }

  img {
    height: 40px;
  }
}
`