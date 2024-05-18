import styled from "styled-components";

export const Inicial = styled.main`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(90deg, #c0392b 0%, #8e44ad 100%);
  height: 88vh;

@media(min-width: 320px) and (max-width: 768px){
  height: 100vh;

img{
  height: 40%;
}
}   
`
export const Info = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;


@media(min-width: 330px) and (max-width: 768px){
  flex-direction: column-reverse;
  width: 100%;
}
`

export const Apresentacao = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

h1{
  font-size: 3rem;
  font-family: 'Roboto';
  font-weight: 300;
  color: #d9c0d8;
  text-align: center;
}

h3 {
  color: aliceblue;
  font-size: 1.5rem;
  font-family: 'Roboto';
  font-weight: 200;
  text-align: center;
}

@media(min-width: 320px) and (max-width: 768px){
  height: 50vh;
  display: flex;
  justify-content: space-around;
h1 {
  font-size: 2rem;
}
}
`


export const Foto = styled.img`
  height: 80%;
  margin-top: 30px;
  box-shadow: 0px 9px 15px #311338;
  border-radius: 50%;
`
