import React from 'react';
import { Row, Col } from 'antd';
import '../css/nosotros.css'; // Importando el archivo CSS
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
// import Nosotros1 from '../img/nosotros1.jpeg'; // Imágenes comentadas
import Nosotros2 from '../img/nosotros2.jpeg';
import Nosotros3 from '../img/nosotros3.jpeg';
import Nosotros4 from '../img/nosotros4.jpeg';
import Nosotros5 from '../img/nosotros5.jpeg';

const SobreNosotros = () => {
  return (
    <div className="background">
      <Navbar />
      <div className="content-wrapper">
        {/* Primera fila: ¿Qué Hacemos? */}
        <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
          <Col xs={24} sm={24} md={24} lg={24} className="text-column bg-green" style={{ height: '50vh', width: '100%' }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',  width: '100%' }}>
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

        {/* Cuarta fila: Objetivos */}
        <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
          <Col 
            xs={24} 
            sm={24} 
            md={24} 
            lg={24} 
            className="text-column bg-yellow" 
            style={{ height: 'auto', padding: 0 }}  // Asegura que el alto sea solo el necesario
          >
            <img 
              src={Nosotros4} 
              alt="Objetivos" 
              className="image image-left"  // Alinea la imagen a la izquierda
              style={{ 
                width: 'auto',   // Ajusta el ancho automáticamente
                height: '100%',  // Ajusta la altura al 100% del contenedor
                marginRight: 0,  // Asegura que no haya margen derecho
                marginLeft: 0,   // Alinea la imagen a la izquierda
                objectFit: 'cover', // Asegura que la imagen cubra el área sin distorsionarse
              }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <h2 className="section-title">Objetivos</h2>
              <ul className="section-list">
                <li>Facilitar el proceso de adopción conectando a personas con refugios y animales en busca de hogar.</li>
                <li>Ofrecer información verificada sobre refugios, clínicas veterinarias y tiendas de mascotas para el bienestar animal.</li>
                <li>Promover campañas de adopción, esterilización y educación sobre el cuidado responsable de mascotas.</li>
              </ul>
            </div>
          </Col>
        </Row>




        {/* Quinta fila: Valores */}
        <Row gutter={[32, 32]} justify="center" align="stretch" style={{ width: '100%' }}>
        <Col xs={24} sm={24} md={24} lg={24} className="text-column bg-green" style={{ height: '50vh', width: '100%' }}>
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
            <img 
              src={Nosotros5} 
              alt="Valores" 
              className="image image-right"
              style={{ width: 'auto', height: '100%' }} 
            />
          </Col>
        </Row>
      </div>
      <FooterComponent />
    </div>
  );
};

export default SobreNosotros;
