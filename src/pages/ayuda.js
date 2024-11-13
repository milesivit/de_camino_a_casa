import React from 'react';
import { Button, Typography, Card } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';

const { Title, Text } = Typography;

function Ayuda() {
  return (
    <div className="background">
      <Navbar />

      <div style={{ padding: '2% 5%' }}>
        <Card
          title="Sección de Ayuda"
          style={{ maxWidth: '800px', margin: 'auto' }}
          bordered={false}
        >
          <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
            ¿Te gustaría ayudar? A continuación te explicamos cómo puedes hacer una donación a los refugios y veterinarias.
          </Text>
          <Button type="primary" style={{ marginTop: '10px' }} href="/donaciones">
              Ver Información de Donaciones
            </Button>

          <div style={{ marginTop: '40px' }}>
            <Title level={4} style={{ color: '#333' }}>¿Quieres saber más sobre los refugios y veterinarias?</Title>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Haz clic en el siguiente botón para obtener más información sobre los refugios y veterinarias que ayudan a los animales.
            </Text>
            <Button type="primary" style={{ marginTop: '10px' }} href="/InformacionVet">
              Ver Información de Donaciones
            </Button>
          </div>

          <div style={{ marginTop: '40px' }}>
            <Title level={4} style={{ color: '#333' }}>¡Encuentra a tu amigo ideal!</Title>
            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
              Si aún no has encontrado a tu amigo ideal, te invitamos a realizar un test para encontrar la mascota que mejor se adapte a ti. ¡Haz clic abajo para empezar!
            </Text>
            <Button type="primary" style={{ marginTop: '10px' }} href="/TestPersonalidad">
              Empezar Test
            </Button>
          </div>
        </Card>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Ayuda;
