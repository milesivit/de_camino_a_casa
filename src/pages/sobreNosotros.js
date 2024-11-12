import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import perrosPanas from '../img/perrosPanas.jpeg';

function sobreNosotros() {
  return (
    <div>
      <Navbar />
      <img src={perrosPanas} alt="perroFacha" />
      <FooterComponent />
    </div>
  );
}

export default sobreNosotros;
