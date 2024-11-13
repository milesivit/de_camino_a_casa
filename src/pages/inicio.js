import React from 'react';
import { Row, Col, Button, Carousel, Progress, Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'; // Importamos Link
import { UserOutlined } from '@ant-design/icons'; // Importamos el ícono de usuario
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Banner from '../img/inicio.png';
import logro1 from '../img/logros1.jpeg'; // Asegúrate de tener tus imágenes
import logro2 from '../img/logros2.jpeg'; // Asegúrate de tener tus imágenes
import logro3 from '../img/logros3.jpeg'; // Asegúrate de tener tus imágenes
import logro4 from '../img/logros4.jpeg'; // Asegúrate de tener tus imágenes
import donacion from '../img/donacion.jpeg'; // Asegúrate de tener esta imagen para la donación

const CustomButton = ({ link, text }) => {
  return (
    <Link to={link} style={{ width: '100%' }}>
      <Button
        type="primary"
        size="large"
        style={{
          marginTop: '20px', // Espacio entre el texto y el botón
          width: '100%', // Asegura que los botones tengan el mismo ancho
          height: '60px', // Asegura que los botones tengan la misma altura
          display: 'block', // Asegura que el botón ocupe todo el ancho del contenedor
          borderRadius: '8px', // Bordes redondeados para todos los botones
          textAlign: 'center', // Centra el texto dentro del botón
        }}
      >
        {text}
      </Button>
    </Link>
  );
};

function Inicio() {
  const contentStyle = {
    height: '400px', // Altura fija para el Carousel
    background: '#364d79',
    textAlign: 'center',
  };

  return (
    <div className="background">
      <Navbar />

      <Row>
        <Col xs={24}>
          <div>
            <img src={Banner} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>

      <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%', margin: 5 }}>
        <Col xs={24} sm={24} md={8} lg={8} className="text-column bg-yellow">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: 50 }}>
            <h2 className="section-title">Adopción</h2>
            <p className="section-text">Descubre a los animales en adopción, ofreciéndote una plataforma para encontrar a tu compañero ideal de manera fácil y rápida.</p>
            <CustomButton link="/SeccionAnimal" text="Adopciones" />
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} className="text-column bg-green">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: 50 }}>
            <h2 className="section-title">Salud</h2>
            <p className="section-text">Accede a información clave sobre cuidados veterinarios, enfermedades comunes y servicios de salud para tus mascotas.</p>
            <CustomButton link="/InformacionVet" text="Veterinarias" />
          </div>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} className="text-column bg-yellow">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: 50 }}>
            <h2 className="section-title">Diversión</h2>
            <p className="section-text">Explora una variedad de actividades y juguetes recomendados para mantener a tus mascotas felices y activas.</p>
            <CustomButton link="/Tienda" text="Tiendas" />
          </div>
        </Col>
      </Row>

      {/* Título para el Carousel */}
      <div style={{ fontSize: '25px', textAlign: 'center', margin: '40px 0', color: 'white' }}>
        <h2>Algunos de nuestros Logros!!!</h2>
      </div>

      {/* Carousel con 4 imágenes */}
      <Carousel autoplay effect="fade" dots={true} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <img src={logro1} alt="Imagen 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={logro2} alt="Imagen 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={logro3} alt="Imagen 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img src={logro4} alt="Imagen 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Carousel>

        {/* Separar los cuadros del Carousel y agregarlos antes de la sección de donaciones */}
        <Row gutter={[32, 32]} justify="center" style={{ margin: '5% 0' }}>
          <Col xs={24} sm={12} md={8} lg={8}>
            <Card
              title="¿Aún no sabes quién es tu amigo ideal?"
              bordered={false}
              style={{
                textAlign: 'center',
                padding: '3%',
                margin: '5%',
                backgroundColor: 'white',
                height: 'auto'  // Asegura que todas las tarjetas tengan la misma altura
              }}
            >
              <p>Descubre al compañero perfecto para tu vida. Realiza nuestro test interactivo y encuentra el animal que mejor se adapta a ti y a tu hogar. ¡Es rápido y divertido!</p>
              <Link to="/TestPersonalidad">
                <Button type="primary" size="large" style={{ borderRadius: '8px' }}>
                  Realizar Test
                </Button>
              </Link>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8}>
            <Card
              title="Principales noticias del mundo animal"
              bordered={false}
              style={{
                textAlign: 'center',
                padding: '3%',
                margin: '5%',
                backgroundColor: 'white',
                height: 'auto'  // Asegura que todas las tarjetas tengan la misma altura
              }}
            >
              <p>Mantente informado con las últimas noticias y eventos sobre el bienestar animal, adopciones, historias inspiradoras y más. ¡Conoce todo lo que está sucediendo en el mundo animal!</p>
              <Link to="/Noticias">
                <Button type="primary" size="large" style={{ borderRadius: '8px' }}>
                  Ver Noticias
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>

      {/* Cuadro blanco con la barra de progreso de la donación */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2% 0' }}>
        <Card
          title="Meta de Donación"
          bordered={false}
          style={{ width: '80%', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}
        >
          <div>
            <p style={{ marginBottom: '20px' }}>
              Ayúdanos a alcanzar nuestra meta de $100,000 para apoyar nuestra causa. Tu contribución es valiosa.
            </p>
            <Progress
              percent={63}
              size="large"
              status="active"
              strokeColor="#52c41a"
              format={(percent) => `$${(percent / 100) * 100000}`} // Mostrar el valor en dólares
            />
            <p style={{ marginTop: '20px' }}>
              Meta: $100,000 | Donado: ${(63 / 100) * 100000}
            </p>

            {/* Espacio para imagen debajo de la descripción */}
            <div style={{ marginTop: '20px' }}>
              <img src={donacion} alt="Imagen de Donación" style={{ width: '20%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
          </div>
          {/* Botón para ir a la página de donaciones */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/Donaciones">
              <Button type="primary" size="large" style={{ borderRadius: '8px' }}>
                Realizar una Donación
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Nueva caja blanca con los íconos de usuario */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2% 0' }}>
        <Card
          title="Principales Contribuyentes del Proyecto"
          bordered={false}
          style={{ width: '80%', padding: '20px', textAlign: 'center', backgroundColor: 'white' }}
        >
          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} md={4}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Santiago Baez</strong></p>
                <p>Fundador y Director de Adopciones</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Milena Sivit</strong></p>
                <p>Coordinadora de Bienestar Animal</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Rebeca López</strong></p>
                <p>Especialista en Veterinaria y Salud</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Alejo Pinatti</strong></p>
                <p>Jefe de Programas de Cuidado Animal</p>
              </div>
            </Col>

            <Col xs={24} sm={12} md={4}>
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginTop: '10px' }}>
                <p><strong>Agustin Fasano</strong></p>
                <p>Desarrollador de la Plataforma</p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Inicio;
