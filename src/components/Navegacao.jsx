import React from "react";
import Inicio from "./Inicio";
import Sobre from "./Sobre";
import Projetos from "./Projetos";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import * as S from './Style.jsx'

//BrowserRouter: Sempre será o primeiro, a função dele é ser a caixa que vai englobar/envolver todo o nosso caminho (navegação)

//Routes: Dentro dessa caixa é onde começaremos a arquitetar nossos caminhos. Determina para onde cada rota vai.

//Route: <Route /> Específico para cada rota, uma Route para cada arquivo navegável (início, sobre e projetos)

//Link: Quando eu clicar em um lugar me leva para outro lugar dentro do meu código/página. O link vem dentro da <li>

export default function Navegacao() {
    return (
        <>
            <header>
                <BrowserRouter>
                    <S.Navigation>
                        <S.List>
                            {/* (TO = para) um link para tal lugar (sobre, projetos e inicio */}
                            <li> <Link to="/"> Inicio </Link> </li>
                            <li> <Link to="/Sobre"> Sobre </Link> </li>
                            <li> <Link to="/Projetos"> Projetos </Link> </li>
                        </S.List>
                    </S.Navigation>

                    <Routes>
                        {/* PATH (caminho) : Configura os dois, link to = "/Sobre" path="Sobre" */}
                        {/* ELEMENT: Configura para qual componente quero ir, element={<Sobre />} */}
                        <Route path="/" element={<Inicio />} />
                        <Route path="/Sobre" element={<Sobre />} />
                        <Route path="/Projetos" element={<Projetos />} />

                    </Routes>

                </BrowserRouter>
            </header>
        </>
    )
}