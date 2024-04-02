import React, { useState } from "react";
import Cruzeiro from "./img/cruzeiro.svg"
import Banda from "./img/Banda_Rouge.svg"
import Cartoon from "./img/Pagina_Cartoon.svg"
import Patrocinadores from "./img/Patrocinadores.svg"
import ComponenteComProps from "./ComponentComProps"

import * as S from './StyledProjetos'

export default function Projetos() {
    return (
        <main>
            <div>
                <h1>PROJETOS FEITOS COM HTML E CSS</h1>
            </div>

            <S.Projetos>
                <S.Componentes>

                </S.Componentes>

                <S.Componentes>
                    
                </S.Componentes>

                <S.Componentes>
                    
                </S.Componentes>

            </S.Projetos>

        <div>
            <h1>PROJETOS EM JAVASCRIPT E REACT</h1>
        </div>

            <S.Projetos>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Cruzeiro}
                        titulo="CRUZEIRO">
                        <h3>VARIÁVEIS E CONDIÇÕES</h3>
                        <p>JAVASCRIPT - LÓGICA DA PROGRAMAÇÃO</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Banda}
                        titulo="BANDA">
                        <h3>ARRAY E MÉTODOS</h3>
                        <p>JAVASCRIPT - LÓGICA DA PROGRAMAÇÃO</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Cartoon}
                        titulo="CARTOON">
                        <h3>PROJETO BASEADO NO SITE CARTOON NETWORK</h3>
                        <p>REACT, STYLED-COMPONENTS, RESPONSIVO, HOOK USESTATE</p>
                    </ComponenteComProps>
                </S.Componentes>

                <S.Componentes>
                    <ComponenteComProps
                        imagem={Patrocinadores}
                        titulo="PATROCINADORES">
                        <h3>USESTATE, USEEFFECT, DOM, STYLED-COMPONENTS</h3>
                        <p>JS,HOOKS, STYLED-COMPONENTS, DOM</p>
                    </ComponenteComProps>
                </S.Componentes>
            </S.Projetos>


        </main>
    )
}
