import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import { Col, Row, Typography, Card, Button } from 'antd';
import mascotas from './mascotas';

const { Title, Text } = Typography;

function HistorialAnimal() {
  const { id } = useParams(); // Obtiene el id de la URL
  const navigate = useNavigate(); // Hook para navegar
  const mascota = mascotas.find(m => m.id === parseInt(id)); // Encuentra la mascota correspondiente

  if (!mascota) {
    return <Text>No se encontró la información de la mascota.</Text>;
  }

  return (
    <div className="background" style={{ minHeight: '100vh', position: 'relative' }}>
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <Card style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
          <img
            src={mascota.img}
            alt={mascota.name}
            style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }}
          />
          <Title level={3}>{mascota.name}</Title>
          <Text><strong>Descripción:</strong> {mascota.description}</Text><br />
          <Text><strong>Sexo:</strong> {mascota.sex}</Text><br />
          <Text><strong>Edad:</strong> {mascota.age}</Text><br />
          <Text style={{ marginTop: '20px', display: 'block' }}>
            <strong>Historia:</strong> {mascota.story}
          </Text>
                  {/* Botón Volver */}
        <div style={{ position: 'absolute', left: '20px', bottom: '-40px' }}>
          <Button
            type="primary"
            onClick={() => navigate('/seccionAnimal')} 
            style={{
              backgroundColor: '#F5D100',
              borderColor: '#F5D100',
              color: 'white',
            }}
          >
            Volver
          </Button>
        </div>
        </Card>
        


      </div>

      <FooterComponent />
    </div>
  );
}

export default HistorialAnimal;
