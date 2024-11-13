import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import perrosPanas from '../img/perrosPanas.jpeg';
import Banner from '../img/sobrenosotros.png'
import { Col, Row, Typography } from 'antd';

function sobreNosotros() {
  return (
    <div className="background">
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      
      <Row>
        <Col xs={24}>
          <div>
            <img src={Banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
      <img src={perrosPanas} alt="perroFacha" />
      <FooterComponent />
    </div>
  );
}

export default sobreNosotros;
