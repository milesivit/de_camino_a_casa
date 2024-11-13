import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../img/donaciones.png'
import FooterComponent from '../components/footer';
import {Row, Col, Form, Input, Button, Typography, message } from 'antd';

const { Title, Paragraph } = Typography;

function Donaciones() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { amount, message: donationMessage } = values;
    const donationData = { amount, message: donationMessage };

    const existingDonations = JSON.parse(localStorage.getItem('donaciones')) || [];
    existingDonations.push(donationData);
    localStorage.setItem('donaciones', JSON.stringify(existingDonations));

    form.resetFields();
    message.success('¡Gracias por tu donación! Los datos se han guardado.');
  };

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
        <Title level={2} style={{ textAlign: 'center' }}>
          ¡Ayuda a nuestros amigos peludos!
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Tu donación puede hacer la diferencia en la vida de un animalito. Haz tu aporte y ayuda a mejorar su calidad de vida.
        </Paragraph>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Monto de la donación"
            name="amount"
            rules={[{ required: true, message: 'Por favor ingresa el monto de la donación' }]}
          >
            <Input type="number" prefix="$" placeholder="0.00" />
          </Form.Item>
          <Form.Item label="Mensaje (opcional)" name="message">
            <Input.TextArea placeholder="Escribe un mensaje especial para el animalito" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Donar ahora
            </Button>
          </Form.Item>
        </Form>
      <FooterComponent />
    </div>
  );
}

export default Donaciones;
