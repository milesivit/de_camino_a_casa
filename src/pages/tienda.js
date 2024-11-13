import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Banner from '../img/tienda.png';
import '../css/tienda.css';
import { Col, Row, Typography, Card } from 'antd';
import tienda1 from '../img/tienda1.png';
import tienda2 from '../img/tienda2.jpeg';
import tienda3 from '../img/tienda3.png';
import tienda4 from '../img/tienda4.webp';
import tienda5 from '../img/tienda5.png';
import tienda6 from '../img/tienda6.png';
import tienda7 from '../img/tienda7.webp';
import tienda8 from '../img/tienda8.jpeg';


const { Title } = Typography;

const tiendas = [
  {
    name: "Mundo Animal",
    description: "Tienda especializada en alimentos premium para mascotas y accesorios.",
    address: "Av. Libertador 1234, Buenos Aires",
    image: tienda1
  },
  {
    name: "Pet Paradise",
    description: "Ofrecemos servicios de peluquería y spa para mascotas.",
    address: "Calle Mora 4561, Córdoba",
    image: tienda2 
  },
  {
    name: "Pet Shop Xpress",
    description: "Venta de juguetes, alimentos y productos para el cuidado de tus mascotas.",
    address: "Calle Ford 1232, Rosario",
    image: tienda3  // Reemplaza con la imagen real
  },
  {
    name: "Bichos y Compañía",
    description: "Accesorios y alimentos especializados para todo tipo de mascotas.",
    address: "Av. Santa Fe 7890, Mendoza",
    image: tienda4  // Reemplaza con la imagen real
  },
  {
    name: "Paws & Claws",
    description: "Tienda para el bienestar de tu mascota, con productos ecológicos.",
    address: "Calle del Sol 453, Buenos Aires",
    image: tienda5  // Reemplaza con la imagen real
  },
  {
    name: "Animal World",
    description: "Tienda con todo lo que necesitas para tus animales, desde comida hasta juguetes.",
    address: "Calle de los Girasoles 356, Córdoba",
    image: tienda6  // Reemplaza con la imagen real
  },
  {
    name: "La Casa de los Animales",
    description: "Venta de animales, productos para su cuidado y accesorios de todo tipo.",
    address: "Av. 9 de Julio 2456, Buenos Aires",
    image: tienda7  // Reemplaza con la imagen real
  },
  {
    name: "Tienda Pet Love",
    description: "Todo para consentir a tu mascota, desde comida hasta camas y juguetes.",
    address: "Calle Bella Vista 1000, Rosario",
    image: tienda8  // Reemplaza con la imagen real
  }
];
function Tienda() {
  return (
    <div className="background">
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>

      {/* Banner */}
      <Row>
        <Col xs={24}>
          <div>
            <img src={Banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>

      {/* Información de las tiendas */}
      <div style={{ padding: '2% 5%' }}>
        <Row gutter={[20, 20]} justify="center">
          {tiendas.map((tienda, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                className="noticia-card"  // Aplica la clase 'noticia-card' aquí
                style={{
                  padding: '1%',
                  display: 'flex',
                  flexDirection: 'column', // Para hacer una sola columna
                  justifyContent: 'flex-start', // Asegurarse de que todo esté alineado en la parte superior
                  maxWidth: '100%',
                  marginBottom: '20px',
                  marginLeft: '10px',
                  marginRight: '10px',
                  width: '100%', // Ocupa el 100% del espacio disponible
                }}
              >
                {/* Imagen de la tienda */}
                <img
                  src={tienda.image}
                  alt={tienda.name}
                  style={{
                    width: '100%',
                    height: 'auto', // Cambiar para que la altura sea automática y evitar el corte
                    maxHeight: '150px', // Ajustar la altura máxima de la imagen
                    objectFit: 'contain', // Evitar el recorte de la imagen
                    borderRadius: '8px',
                    marginBottom: '10px', // Espacio entre la imagen y el contenido
                  }}
                />
                
                {/* Información de la tienda */}
                <div style={{ padding: '0 10px' }}>
                  <Title level={4} style={{ color: '#fff', fontWeight: '700', marginBottom: '8px' }}>
                    {tienda.name}
                  </Title>
                  <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#fff', marginBottom: '8px' }}>
                    {tienda.description}
                  </p>
                  <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#fff' }}>
                    <strong>Dirección:</strong> {tienda.address}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Tienda;
