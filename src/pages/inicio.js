import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import perroFacha from '../img/perroFacha.jpg';

function Inicio() {
  return (
    <div>
      <Navbar />
      <img src={perroFacha} alt="perroFacha" />
      <FooterComponent />
    </div>
  );
}

export default Inicio;
