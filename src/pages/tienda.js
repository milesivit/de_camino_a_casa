import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Banner from '../img/tienda.png'
import { Col, Row, Typography} from 'antd';

function Tienda() {
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
      <FooterComponent />
    </div>
  );
}

export default Tienda;
