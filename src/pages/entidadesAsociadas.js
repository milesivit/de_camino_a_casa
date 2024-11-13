import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

function EntidadesAsociadas() {
  const entidades = [
    {
      nombre: 'Refugio Animal Happy Paws',
      descripcion: 'Un refugio que cuida y encuentra hogar a perros y gatos abandonados.',
      contacto: 'info@happypaws.org',
      img: '/img/Happy_Paws.png', // Ruta correcta
    },
    {
      nombre: 'Fundación Amigos Felinos',
      descripcion: 'Organización dedicada al rescate de gatos callejeros y su bienestar.',
      contacto: 'contacto@amigosfelinos.com',
      img: '/img/Amigos_Felinos.png', // Ruta correcta
    },
    {
      nombre: 'Perros de Asistencia y Más',
      descripcion: 'Proporciona entrenamiento a perros de asistencia para personas con discapacidades.',
      contacto: 'perrosasistencia@ayuda.org',
      img: '/img/WhatsApp-Image-2021-12-31-at-14.32.44.png', // Ruta correcta
    },
  ];


  return (
    <div className="background">
      <Navbar />
        <Title level={2} style={{ textAlign: 'center' }}>Entidades Asociadas</Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Conoce a las organizaciones con las que colaboramos para mejorar la vida de los animales.
        </Paragraph>
        
        <Row gutter={[16, 16]}>
          {entidades.map((entidad, index) => (
            <Col key={index} span={24} style={{ marginBottom: '20px' }}>
              <Card bordered={false} style={{ display: 'flex', padding: 0 }}>
                {/* Div de la imagen, ocupa un tamaño fijo */}
                <div
                  style={{
                    width: '200px',
                    height: '200px',
                    flexShrink: 0,
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <img
                    alt={entidad.nombre}
                    src={entidad.img}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Div de la información, ocupa el resto del espacio */}
                <div style={{ flexGrow: 1, marginLeft: '20px' }}>
                  <Title level={3} style={{ margin: 0 }}>{entidad.nombre}</Title>
                  <Paragraph>{entidad.descripcion}</Paragraph>
                  <Paragraph style={{ marginTop: '10px' }}>
                    <strong>Contacto:</strong> {entidad.contacto}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      <FooterComponent />
    </div>
  );
}

export default EntidadesAsociadas;
