import React, { useState } from 'react';
import { Card, Row, Col, Typography, Radio, Input, Button } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import banner from '../img/testpersonalidad.png';
import alejito from '../img/alejogatito.jpeg';
import globo from '../img/pezglobo.jpg';
import niandu from '../img/niandu.jpg';
import carpincho from '../img/carpincho.jpg';

const { Title, Text } = Typography;

function TestPersonalidad() {
  const [answers, setAnswers] = useState({
    nivel_actividad: '',
    espacio: '',
    joda: '',
    tipo_personalidad: ''
  });
  const [result, setResult] = useState(null);
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
    // Lógica para determinar la mascota ideal basada en las respuestas
    if (answers.nivel_actividad === 'alto' && answers.espacio === 'grande') {
      setResult(niandu);
      setDescription('El ñandú es un compañero super activo, ideal para personas que aman el fútbol.');
    } else if (answers.joda === 'si') {
      setResult(alejito);
      setDescription('Alejito, el gato montés, es perfecto si amas la joda y necesitas buena compañía, se prende para todo, si te tiras de un puente él se tira también.');
    } else if (answers.tipo_personalidad.toLowerCase() === 'calmado') {
      setResult(globo);
      setDescription('El pez globo es una mascota fascinante y de bajo mantenimiento, perfecta para personas que buscan compañía sin muchas demandas.');
    } else {
      setResult(carpincho);
      setDescription('El carpincho es un animal fachero y muy tincho. Si te tocó probablemente tengas olor a smirnoff y uses lentes de sol a la noche.');
    }
  };

  return (
    <div className="background">
      <Navbar />

      <Row>
        <Col xs={24}>
          <img src={banner} alt="Banner" style={{ width: '100%' }} />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={22} sm={18} md={14} lg={10}>
          <Card>
            <Title level={3}>Encuentra tu mascota ideal</Title>

            <div style={{ marginBottom: '20px' }}>
              <p>¿Cuál es tu nivel de actividad?</p>
              <Radio.Group name="nivel_actividad" onChange={handleChange}>
                <Radio value="alto">Alto</Radio>
                <Radio value="medio">Medio</Radio>
                <Radio value="bajo">Bajo</Radio>
              </Radio.Group>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p>¿Llevas/llevarías de vacaciones a tu mascota?</p>
              <Radio.Group name="espacio" onChange={handleChange}>
                <Radio value="grande">Sí</Radio>
                <Radio value="medio">No</Radio>
                <Radio value="pequeño">Depende</Radio>
              </Radio.Group>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p>¿Te gusta salir de joda?</p>
              <Radio.Group name="joda" onChange={handleChange}>
                <Radio value="si">Sí</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <p>Describe brevemente tu personalidad</p>
              <Input
                name="tipo_personalidad"
                placeholder="Ej. Tranquilo, extrovertido, etc."
                onChange={handleChange}
              />
            </div>

            <Button type="primary" onClick={handleSubmit}>
              Aceptar
            </Button>

            {result && (
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Title level={4}>Tu mascota ideal es:</Title>
                <img
                  src={result}
                  alt={description}
                  style={{ width: '200px', marginTop: '10px' }}
                />
                <Text style={{ display: 'block', marginTop: '10px' }}>{description}</Text>
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
