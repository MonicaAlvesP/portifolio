import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio/Inicio.jsx";
import Sobre from "./Sobre/Sobre.jsx";
import Projetos from "./Projetos/Projetos.jsx";
import { Navigation } from './Style.jsx'; // Importação do componente estilizado

export default function Navegacao() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <BrowserRouter>
          <Navigation isOpen={isOpen}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✖' : '☰'}
            </button>
            <ul>
              <li><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
              <li><Link to="/Sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
              <li><Link to="/Projetos" onClick={() => setIsOpen(false)}>Projetos</Link></li>
            </ul>
          </Navigation>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Projetos" element={<Projetos />} />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
}
