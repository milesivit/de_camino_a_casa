import React from 'react';
import { Row, Col } from 'antd';
import '../css/nosotros.css'; // Importando el archivo CSS
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Nosotros2 from '../img/nosotros2.jpeg';
import Nosotros3 from '../img/nosotros3.jpeg';
import SobreNosotros from '../img/sobrenosotros.png'; 

const SobreNosotros = () => {
  return (
    <div className="background">
      <Navbar />

      {/* Primera fila: Banner y ¿Qué Hacemos? */}
      <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
        {/* Columna para el banner */}
        <Col xs={24} sm={24} md={12} lg={12}>
        <div style={{ width: '100%', height: 'auto' }}>
          <img src={SobreNosotros} alt="Banner" style={{ width: '100%' }} />
        </div>
        </Col>

        {/* Columna para el primer cuadro: ¿Qué Hacemos? */}
        <Col
          xs={24}
          sm={24}
          md={12} // Esto asegura que ocupe la mitad del ancho en pantallas medianas y mayores
          lg={12} // Lo mismo para pantallas grandes
          className="text-column bg-green"
          style={{ height: '50vh', width: '100%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 className="section-title">¿Qué Hacemos?</h2>
            <p className="section-text">
              Conectamos a personas que desean adoptar animales con refugios, veterinarias y tiendas de mascotas, promoviendo
              la adopción responsable y el bienestar animal.
            </p>
          </div>
        </Col>
      </Row>

      {/* Segunda fila: Misión */}
      <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
        <Col xs={24} sm={24} md={24} lg={24} className="text-column bg-yellow" style={{ height: '50vh', width: '100%' }}>
          <img
            src={Nosotros2}
            alt="Misión"
            className="image"
            style={{ width: 'auto', height: '100%' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
            <h2 className="section-title">Misión</h2>
            <p className="section-text">
              Nuestra misión es conectar a personas que buscan adoptar animales con refugios, veterinarias y tiendas de
              mascotas. Creemos en brindar una segunda oportunidad a cada animal, creando un entorno donde todos puedan encontrar un hogar seguro, amoroso y adecuado.
            </p>
          </div>
        </Col>
      </Row>

      {/* Tercera fila: Visión */}
      <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
        <Col xs={24} sm={24} md={24} lg={24} className="text-column bg-green" style={{ height: '50vh', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 className="section-title">Visión</h2>
            <p className="section-text">
              Soñamos con un mundo en el que ningún animal esté sin hogar y cada uno tenga la posibilidad de ser parte de una familia que le brinde el cuidado y cariño que merece.
            </p>
          </div>
          <img
            src={Nosotros3}
            alt="Visión"
            className="image"
            style={{ width: 'auto', height: '100%' }}
          />
        </Col>
      </Row>

      {/* Cuarta fila: Objetivos y Valores */}
      <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
        {/* Objetivos */}
        <Col
          xs={24}
          sm={24}
          md={12} // Modifica a un 12 para que ocupe la mitad del ancho en pantallas medianas y mayores
          lg={12} // Asegura que se ocupe la mitad del ancho en pantallas grandes
          className="text-column bg-yellow"
          style={{ height: 'auto', padding: 0 }} // Asegura que el alto sea solo el necesario
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h2 className="section-title">Objetivos</h2>
            <ul className="section-list">
              <li>Facilitar el proceso de adopción conectando a personas con refugios y animales en busca de hogar.</li>
              <li>Ofrecer información verificada sobre refugios, clínicas veterinarias y tiendas de mascotas para el bienestar animal.</li>
              <li>Promover campañas de adopción, esterilización y educación sobre el cuidado responsable de mascotas.</li>
            </ul>
          </div>
        </Col>

        {/* Valores */}
        <Col
          xs={24}
          sm={24}
          md={12} // Modifica a un 12 para que ocupe la mitad del ancho en pantallas medianas y mayores
          lg={12} // Asegura que se ocupe la mitad del ancho en pantallas grandes
          className="text-column bg-green"
          style={{ height: '50vh', width: '100%' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }} className="values-wrapper">
            <h2 className="section-title">Valores</h2>
            <ul className="section-list">
              <li><strong>Compasión</strong>: Nos motiva el deseo de ayudar a los animales a encontrar un hogar amoroso y digno.</li>
              <li><strong>Responsabilidad</strong>: Creemos en la adopción responsable y en el compromiso hacia el bienestar animal.</li>
              <li><strong>Transparencia</strong>: Brindamos información clara y confiable a quienes desean adoptar o apoyar a los animales.</li>
              <li><strong>Colaboración</strong>: Fomentamos el trabajo conjunto entre refugios, veterinarias y otros actores para hacer posible nuestra misión.</li>
              <li><strong>Compromiso</strong>: Nos dedicamos a generar un impacto positivo en la vida de los animales y en las comunidades que los acogen.</li>
            </ul>
          </div>
        </Col>
      </Row>

      <FooterComponent />
    </div>
  );
};

export default SobreNosotros;
