import React from 'react';
import {Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import perroFacha from '../img/perroFacha.jpg';
import Banner from '../img/inicio.png'

function Inicio() {
  return (
    <div className="background">
      <Navbar />

      <Row>
        <Col xs={24}>
          <div>
            <img src={Banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>

      <img src={perroFacha} alt="perroFacha" />
      <FooterComponent />
    </div>
  );
}

export default Inicio;
