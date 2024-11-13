import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import { Card, Row, Col, Typography } from 'antd';
import '../css/noticias.css'; // Asegúrate de que la ruta esté bien
import banner from '../img/bannernoticia.jpeg'; // Asegúrate de que la ruta esté bien

const { Title } = Typography;

// Array de noticias alegres y positivas
const noticias = [
  {
    title: "¡Un Refugio Lleno de Sonrisas para Mascotas!",
    description: "Hoy se inauguró un refugio especial para animales rescatados, brindando un hogar seguro y amoroso para cientos de mascotas."
  },
  {
    title: "Veterinarios Celebran Jornada de Vacunación Exitosa",
    description: "Un grupo de veterinarios se reunió para ofrecer una jornada gratuita de vacunación para animales de la comunidad, con gran participación y éxito."
  },
  {
    title: "Adopción Responsable: ¡Más de 50 Mascotas Encontraron Hogar!",
    description: "Durante una campaña reciente, más de 50 mascotas fueron adoptadas, brindando nuevos comienzos llenos de amor y cariño."
  },
  {
    title: "Rescate Exitoso: Una Manada de Perros Encontró Su Hogar",
    description: "Gracias a la colaboración de voluntarios, una manada de perros rescatados encontró un nuevo hogar donde serán cuidados y amados."
  },
  {
    title: "Felices y Saludables: Refugio Recibe Generosa Donación de Alimentos",
    description: "Un grupo de donantes altruistas ha entregado una gran cantidad de alimentos para animales, asegurando que los animales del refugio reciban lo mejor."
  },
  {
    title: "¡Gran Noticia! Mascotas Adoptadas Participan en Evento de Comunidad",
    description: "Las mascotas adoptadas participaron en un evento de la comunidad, donde los nuevos dueños mostraron lo felices que están con sus nuevos amigos peludos."
  }
];

function Noticias() {
  return (
    <div className="background">
      <Navbar />

      {/* Aquí está el banner */}
      <Row>
        <Col xs={24}>
          <div>
            <img src={banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>

      {/* Noticias */}
      <div style={{ padding: '2% 5%' }}>
        <Row justify="center" style={{ marginTop: '20px', gap: '20px' }}>
          {noticias.map((noticia, index) => (
            <Col key={index} xs={24} md={8} lg={6}>
              <Card
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  padding: '1%',
                  marginBottom: '2.5%',
                  border: '0.5px solid #c7c7c7',
                }}
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24}>
                    <Title level={3} style={{ marginTop: '5px', color: '#333', fontWeight: '700' }}>
                      {noticia.title}
                    </Title>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
                      {noticia.description}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Noticias;
