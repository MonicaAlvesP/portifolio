import styled from "styled-components";

export const Sobre = styled.main`
    display: flex;
    justify-content: space-evenly;

@media(min-width: 320px) and (max-width: 768px){
    flex-direction: column;
    align-items: center;
}
`
export const Estudos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    width: 30%;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    margin-top: 2rem;
    padding-bottom: 37vh;

div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: aliceblue;
    margin: 1rem;
}

h1{
    font-size: 1.6rem;
    text-align: center;
    color: #96FF08;
}

h3{
    font-weight: 100;
    font-size: 1.5rem;
}


@media(min-width: 320px) and (max-width: 768px){
    width: 50vh;
    height: 50vh;
}
img{
    height: 6vh;
}

h3{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
}

`

export const Habilidades = styled.section`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 30%;
    background-color: rgba(8, 38, 57, 0.9);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    margin-top: 2rem;

div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: aliceblue;
    margin: 1rem;

}

h1{
    font-size: 1.6rem;
    text-align: center;
    color: #96FF08;
}

img{
    height: 8vh;
}

h3{
    font-weight: 100;
    font-size: 1.5rem;
}

@media(min-width: 320px) and (max-width: 768px){
    width: 50vh;
    height: 80vh;
}

img{
    height: 7vh;
}

h3{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;
}
`