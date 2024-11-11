import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Donaciones from '../pages/donaciones';
import EntidadesAsociadas from '../pages/entidadesAsociadas';
import SobreNosotros from '../pages/sobreNosotros';
import Tienda from '../pages/tienda';
import SeccionAnimal from '../pages/seccionAnimal';
import InformacionVet from '../pages/informacionVet';
import HistorialAnimal from '../pages/historialAnimal';
import Noticias from '../pages/noticias';
import TestPersonalidad from '../pages/testPersonalidad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Donaciones" element={<Donaciones />} />
        <Route path="/EntidadesAsociadas" element={<EntidadesAsociadas />} />
        <Route path="/Tienda" element={<Tienda />} />
        <Route path="/SeccionAnimal" element={<SeccionAnimal />} />
        <Route path="/InformacionVet" element={<InformacionVet />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/HistorialAnimal" element={<HistorialAnimal />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/TestPersonalidad" element={<TestPersonalidad />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
