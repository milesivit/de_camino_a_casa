import React, { useState } from 'react'; 
import { Card, Row, Col, Typography, Radio, Input, Button, Space } from 'antd'; 
import Navbar from '../components/Navbar'; 
import FooterComponent from '../components/footer'; 
import banner from '../img/testpersonalidad.png'; 
import alejito from '../img/alejogatito.jpeg'; 
import globo from '../img/pezglobo.jpg'; 
import niandu from '../img/niandu.jpg'; 
import carpincho from '../img/carpincho.jpg'; 

const { Title, Text } = Typography; 

function TestPersonalidad() {
  // almacena las respuestas del usuario
  const [answers, setAnswers] = useState({
    nivel_actividad: '', // actividad
    espacio: '', // espacio para la mascota
    joda: '', // si le gusta salir de joda
    tipo_personalidad: '' // personalidad del usuario
  });

  // almacena la mascota ideal y su descripción
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState('');

  // maneja los cambios en las respuestas de las preguntas
  const handleChange = (e) => {
    const { name, value } = e.target; // sacamos el nombre y valor del campo
    setAnswers({ ...answers, [name]: value }); // actualizamos el estado con la nueva respuesta
  };

  // maneja el envío del formulario y determina la mascota ideal
  const handleSubmit = () => {
    if (answers.nivel_actividad === 'alto' && answers.espacio === 'grande') {
      setResult(niandu); // si la actividad es alta y el espacio es grande, la mascota es el ñandú
      setDescription('El ñandú es un compañero super activo, ideal para personas que aman el fútbol.');
    } else if (answers.joda === 'si') {
      setResult(alejito); // si le gusta la joda, la mascota es el gato montés
      setDescription('Alejito, el gato montés, es perfecto si amas el joda y necesitas buena compañía, se prende para todo, si te tiras de un puente él se tira también.');
    } else if (answers.tipo_personalidad.toLowerCase() === 'calmado') {
      setResult(globo); // si la personalidad es calmada, la mascota es el pez globo
      setDescription('El pez globo es una mascota fascinante y de bajo mantenimiento, perfecta para personas que buscan compañía sin muchas demandas.');
    } else {
      setResult(carpincho); // en cualquier otra cosa, la mascota es el carpincho
      setDescription('El carpincho es un animal fachero y muy tincho. Si te tocó probablemente tengas olor a smirnoff y uses lentes de sol a la noche.');
    }
  };

  return (
    <div className="background"> 
      <Navbar /> 

      <Row> 
        <Col xs={24}> 
          <img 
            src={banner} 
            alt="Banner" 
            style={{
              width: '100%', 
              borderRadius: '8px', 
              marginBottom: '40px' // separar el banner del contenido
            }} 
          /> 
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '40px' }}> 
        <Col xs={22} sm={18} md={14} lg={10}> 
          <Card
            style={{
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0.2, 0.5)',
            }}
          >
            <Title level={3} style={{ textAlign: 'center' }}>Encuentra tu mascota ideal</Title>

            {/* pregunta 1: Nivel de actividad */}
            <div style={{ marginBottom: '20px' }}>
              <p>¿Cuál es tu nivel de actividad?</p>
              <Radio.Group name="nivel_actividad" onChange={handleChange}>
                <Radio value="alto">Alto</Radio>
                <Radio value="medio">Medio</Radio>  {/* radio permite generar una opcion entre varias cheeee */}
                <Radio value="bajo">Bajo</Radio>
              </Radio.Group>
            </div>

            {/* pregunta 2: Espacio para la mascota */}
            <div style={{ marginBottom: '20px' }}>
              <p>¿Llevas/llevarías de vacaciones a tu mascota?</p>
              <Radio.Group name="espacio" onChange={handleChange}>
                <Radio value="grande">Sí</Radio>
                <Radio value="medio">No</Radio>
                <Radio value="pequeño">Depende</Radio>
              </Radio.Group>
            </div>

            {/* pregunta 3: Gustos para salir de joda */}
            <div style={{ marginBottom: '20px' }}>
              <p>¿Te gusta salir de joda?</p>
              <Radio.Group name="joda" onChange={handleChange}>
                <Radio value="si">Sí</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </div>

            {/* pregunta 4: Descripción de la personalidad */}
            <div style={{ marginBottom: '20px' }}>
              <p>Describe brevemente tu personalidad</p>
              <Input
                name="tipo_personalidad"
                placeholder="Ej. Tranquilo, extrovertido, etc."
                onChange={handleChange}
              />
            </div>

            {/* enviar respuestas */}
            <Button 
              type="primary" 
              style={{
                width: '100%', 
                fontSize: '16px', 
                borderRadius: '8px', 
                backgroundColor: '#4CAF50', 
                border: 'none', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
              onClick={handleSubmit}
            >
              Aceptar
            </Button>

            {/* resultado */}
            {result && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={4}>Tu mascota ideal es:</Title>
                <img
                  src={result} // imagen de la mascota ideal
                  alt={description} // descripción de la mascota
                  style={{
                    width: '200px',
                    marginTop: '10px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0.3, 0.7)',
                  }}
                />
                <Text style={{ display: 'block', marginTop: '10px' }}>{description}</Text> {/* descripción textual de la mascota */}
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <FooterComponent /> 
    </div>
  );
}

export default TestPersonalidad;
