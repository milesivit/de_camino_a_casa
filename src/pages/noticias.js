import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import { Card, Row, Col, Typography } from 'antd';
import '../css/noticias.css';
import Banner from '../img/noticias.png';
import UltimoMomento from '../img/ultimomomento.png';
import noticia1 from '../img/noticia1.jpg';
import noticia2 from '../img/noticia2.jpeg';
import noticia3 from '../img/noticia3.jpeg';
import noticia4 from '../img/noticia4.jpeg';
import noticia5 from '../img/noticia5.jpg';
import noticia6 from '../img/noticia6.jpeg';
import noticia7 from '../img/noticia7.jpg';
import noticia8 from '../img/noticia8.jpg';


const { Title } = Typography;

const noticias = [
  {
    title: "¡Un Refugio Lleno de Sonrisas para Mascotas!",
    description: "Hoy se inauguró un refugio especial para animales rescatados, brindando un hogar seguro y amoroso para cientos de mascotas.",
    image: noticia1
  },
  {
    title: "Veterinarios Celebran Jornada de Vacunación Exitosa",
    description: "Un grupo de veterinarios se reunió para ofrecer una jornada gratuita de vacunación para animales de la comunidad, con gran participación y éxito.",
    image: noticia2
  },
  {
    title: "Caso positivo de COVID-19",
    description: "Un perro en Río Cuarto dio positivo por COVID-19. Está en aislamiento y bajo cuidado veterinario",
    image: noticia3
  },
  {
    title: "Perro Supera Enfermedad Letal y Se Recupera",
    description: "Un perro que luchaba contra una enfermedad letal ha logrado recuperarse por completo. Tras un tratamiento intensivo, el animal se encuentra ahora en excelente estado de salud, aunque tenga un cono en la cabeza",
    image: noticia4
  },
  {
    title: "Felices y Saludables: Refugio Recibe Generosa Donación de Alimentos",
    description: "Un grupo de donantes altruistas ha entregado una gran cantidad de alimentos para animales, asegurando que los animales del refugio reciban lo mejor.",
    image: noticia5
  },
  {
    title: "¡CUIDADO! Tortuga Peligrosa Se Pierde en la Ciudad",
    description: "Una tortuga, considerada peligrosa, se ha perdido en la ciudad. Las autoridades piden a los vecinos que no se acerquen y que reporten cualquier avistamiento mientras se lleva a cabo la búsqueda.",
    image: noticia6
  },
  {
    title: "Gallina pone huevo gigante en España",
    description: "Una gallina en España sorprendió al poner un huevo casi el doble de grande que uno normal, un raro fenómeno causado por un desajuste hormonal.",
    image: noticia7
  },
  {
    title: "Perro guardian salva a su familia de un intruso",
    description: "Un perro guardian en México evitó un robo al atacar a un intruso que intentó ingresar a la casa de su dueño. El valiente canino logró ahuyentar al ladrón, protegiendo a la familia sin sufrir daños.",
    image: noticia8
  }
];

function Noticias() {
  return (
    <div className="background">
      <Navbar />

      {/* Banner */}
      <Row>
        <Col xs={24}>
          <div>
            <img src={Banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>

      {/* Banner */}
      <Row>
        <Col xs={24}>
          <div>
            <img
              src={UltimoMomento}
              alt="Banner"
              style={{ width: '100%', height: 'auto', marginTop: '2%' }}  // Ajustamos la altura máxima
            />
          </div>
        </Col>
      </Row>

      {/* Noticias */}
      <div style={{ padding: '2% 5%' }}>
        <Row gutter={[20, 20]} justify="center">
          {noticias.map((noticia, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                className="noticia-card"
                style={{
                  borderRadius: '8px',
                  padding: '1%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  maxWidth: '100%',
                  marginBottom: '20px',
                  marginLeft: '10px',
                  marginRight: '10px'
                }}
                bodyStyle={{ display: 'flex', height: '100%' }}
              >
                <Row gutter={16} style={{ flex: 1 }}>

                  {/* Imagen de la noticia */}
                  <Col xs={10} style={{ display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '15px'
                      }}
                    />
                  </Col>

                  {/* Texto de la noticia */}
                  <Col xs={14} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'right', paddingLeft: '20px' }}>
                    <Title level={3} style={{ color: '#fff', fontWeight: '700', marginLeft: '4%' }}>
                      {noticia.title}
                    </Title>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#fff', marginLeft: '8%' }}>
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
