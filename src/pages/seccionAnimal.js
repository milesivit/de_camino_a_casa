import React from 'react';
import { Col, Row, Typography, Card, Button } from 'antd';
import '../css/seccionAnimal.css';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Banner from '../img/seccionanimal.png';
import Alex from '../img/alex.jpg';
import Theo from '../img/theo.jpg';
import Milo from '../img/milo.jpg';
import Joaquin from '../img/joaquin.jpg';
import Ali from '../img/ali.jpg';
import Luna from '../img/luna.jpg';
import Alejo from '../img/alejotomador.jpg'
import Chiquito from '../img/chiquito.jpg';

const { Title, Text } = Typography;

// Información de mascotas para adopción
const mascotas = [
  { img: Alex, name: 'Alex', description: 'Jugueton y sociable', sex: 'Macho', age: '10 años' },
  { img: Theo, name: 'Theo', description: 'Aventurero y cariñoso', sex: 'Macho', age: '5 años' },
  { img: Milo, name: 'Milo', description: 'Jugueton y negro', sex: 'Macho', age: '4 años' },
  { img: Joaquin, name: 'Joaquin', description: 'Tranquilo y amigable', sex: 'Macho', age: '15 años' },
  { img: Ali, name: 'Ali', description: 'Amorosa y protectora', sex: 'Hembra', age: '6-8 años' },
  { img: Luna, name: 'Luna', description: 'Buena y reservada', sex: 'Hembra', age: '1 año y medio' },
  { img: Chiquito, name: 'Chiquito', description: 'Fiel y orgulloso', sex: 'Macho', age: '20 años' },
  { img: Alejo, name: 'Alejo', description: 'Borracho y bandido', sex: 'Macho', age: '20 años' },
];

function SeccionAnimal() {
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
          <Button type="primary" style={{ backgroundColor: '#4caf50', borderColor: '#4caf50', color: 'white' }}>
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
