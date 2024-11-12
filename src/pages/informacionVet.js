import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import '../css/informacionVet.css'; // Importa después del CSS de Ant Design
import vet1 from '../img/vet1.webp';
import vet2 from '../img/vet2.webp';
import vet3 from '../img/vet3.jpeg';
import vet7 from '../img/amo.png';
import ref3 from '../img/refugio3.webp';
import ref4 from '../img/refugio4frank.jpg';
import banner from '../img/refugiosVeterinarias.png'; 

const { Title } = Typography;

function InformacionVet() {
  return (
    <div className="background">
      <Navbar />

      <Row>
        <Col xs={24}>
          <div>
            <img src={banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
      
      <div style={{ padding: '2% 5%' }}>
        <Row justify="center" style={{ marginTop: '20px', gap: '20px' }}>
          <Col xs={24} md={20} lg={16}>
            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={ref4} 
                    alt="Refugio"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Santuario Frank Cuesta
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                    "El Santuario de Frank Cuesta es un refugio dedicado a la protección y rehabilitación de animales en peligro, especialmente rescatados del tráfico ilegal. Con un enfoque en la conservación y educación, el santuario busca ofrecer un hogar seguro y promover el respeto hacia la vida silvestre."
                  </p>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={vet1} 
                    alt="Veterinaria"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Veterinaria Carevet
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>    
                    "Veterinaria CareVet ofrece atención integral para mascotas, con servicios de medicina preventiva, diagnósticos avanzados y tratamientos personalizados. Nos dedicamos al bienestar animal con un equipo profesional y tecnología de vanguardia."
                  </p>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={vet7} 
                    alt="Refugio"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Refugio Amigos
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                    "Refugio Amigos es un santuario para animales rescatados que ofrece cuidado, rehabilitación y la oportunidad de encontrar un nuevo hogar. Promovemos la adopción responsable y la educación sobre el bienestar animal."
                  </p>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={vet2} 
                    alt="Veterinaria"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Veterinaria Carevet
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>    
                    "Veterinaria Vibras brinda atención profesional y personalizada para la salud y bienestar de tus mascotas, ofreciendo servicios de prevención, diagnóstico y tratamiento en un ambiente cálido y confiable."
                  </p>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={ref3} 
                    alt="Refugio"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Refugio Nuevo Hogar
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                    "Refugio Nuevo Hogar es un espacio dedicado al rescate y cuidado de animales en situación de abandono, donde brindamos atención, rehabilitación y la oportunidad de encontrar un hogar lleno de amor y responsabilidad."
                  </p>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <img
                    src={vet3} 
                    alt="Refugio"
                    style={{ width: '100%', borderRadius: '8px' }}
                  />
                </Col>
                <Col xs={24} md={16}>
                  <Title level={4} style={{ marginTop: '5px', color: '#333', fontWeight: '600' }}>
                    Refugio Nuevo Hogar
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
                    "Refugio de Animales Grandes y Silvestres se especializa en la atención médica de animales de granja, exóticos y salvajes, ofreciendo servicios de prevención, diagnóstico y tratamiento con un enfoque en su bienestar y conservación."
                  </p>
                </Col>
              </Row>
            </Card>




          </Col>
        </Row>
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default InformacionVet;
