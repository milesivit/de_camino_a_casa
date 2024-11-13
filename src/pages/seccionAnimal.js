import React from 'react';
import { Col, Row, Typography, Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/seccionAnimal.css';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Banner from '../img/seccionanimal.png';
import mascotas from './mascotas';


const { Title, Text } = Typography;

function SeccionAnimal() {
  const navigate = useNavigate();
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
      
      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col xs={24} md={20} lg={16} style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '1.5rem', marginTop: '3%', display: 'block' }}>
            ¿Buscas un nuevo amigo?
          </Text>
          <Title level={1} style={{ color: 'black', marginTop: '20px', marginBottom: '40px', fontSize: '3rem', fontWeight: 300 }}>
            ¡Encuentra a tu compañero ideal!
          </Title>
        </Col>
      </Row>
      
      {/* Mapeo de mascotas */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px', paddingLeft: '5%', paddingRight: '5%' }}>
  {mascotas.map((mascota, index) => (
    <Col key={index} xs={24} sm={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
      <Card className="card" style={{ width: '100%', maxWidth: '280px', marginBottom: '2.5%', textAlign: 'center' }}>
        <img src={mascota.img} alt={mascota.name} style={{ width: '100%', marginBottom: '10px', borderRadius: '8px' }} />
        <Title level={4} style={{ marginBottom: '5px' }}>{mascota.name}</Title>
        <Text>{mascota.description}</Text><br />
            <Text>Sexo: {mascota.sex}</Text><br />
            <Text>Edad: {mascota.age}</Text>
            <div style={{ marginTop: '10px' }}>
            <Button
            type="primary"
            style={{ backgroundColor: '#4caf50', borderColor: '#4caf50', color: 'white' }}
            onClick={() => navigate(`/mascotas/${mascota.id}`)} // Navega usando mascota.id
          >
            Adoptar
          </Button>
        </div>
      </Card>
    </Col>
  ))}
</Row>

      
      <FooterComponent />
    </div>
  );
}


export default SeccionAnimal; 
