import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import asociacion1 from '../img/asociacion1.png';
import asociacion2 from '../img/asociacion2.png';
import asociacion3 from '../img/asociacion3.png';
import Banner from '../img/entidadesasociadas.png'; // Ruta relativa al archivo de imagen
import '../css/entidadesAsociadas.css'; // Ruta relativa al archivo CSS

const { Title, Paragraph } = Typography;

function EntidadesAsociadas() {
  const entidades = [
    {
      nombre: 'Refugio Animal Happy Paws',
      descripcion: 'Un refugio que cuida y encuentra hogar a perros y gatos abandonados.',
      contacto: 'infosiempre@happypaws.org',
      img: asociacion1,
    },
    {
      nombre: 'Fundación Amigos Felinos',
      descripcion: 'Organización dedicada al rescate de gatos callejeros y su bienestar.',
      contacto: 'contacto@amigosfelinos.com',
      img: asociacion2,
    },
    {
      nombre: 'Perros de Asistencia y Más',
      descripcion: 'Proporciona entrenamiento a perros de asistencia para personas con discapacidades.',
      contacto: 'perrosasistencia@ayuda.org',
      img: asociacion3,
    },
  ];

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
      <div className="entidades-container">
        <Row gutter={[16, 24]}>
          {entidades.map((entidad, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card className="entidad-card" bordered={false}>
                <div className="entidad-image-container">
                  <img src={entidad.img} alt={entidad.nombre} className="entidad-image" />
                </div>
                <div className="entidad-info">
                  <Title level={3} className="entidad-name">{entidad.nombre}</Title>
                  <Paragraph className="entidad-description">{entidad.descripcion}</Paragraph>
                  <Paragraph className="entidad-contacto">
                    <strong>Contacto:</strong> {entidad.contacto}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
      {/* Footer en el fondo */}
      <FooterComponent />
    </div>
  );
}

export default EntidadesAsociadas;
