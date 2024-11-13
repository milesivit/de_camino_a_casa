// src/Components/Donaciones.js
import React from 'react';
import { Form, Input, Button, Typography, message, Card } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import banner from '../img/donaciones.png';  // Asegúrate de tener la imagen en la ruta correcta
import '../css/donaciones.css'; // Importamos el archivo CSS

const { Title, Paragraph } = Typography;

function Donaciones() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { amount, message: donationMessage } = values;
    const donationData = { amount, message: donationMessage };

    // Guardar la donación en localStorage
    const existingDonations = JSON.parse(localStorage.getItem('donaciones')) || [];
    existingDonations.push(donationData);
    localStorage.setItem('donaciones', JSON.stringify(existingDonations));

    // Limpiar el formulario y mostrar un mensaje de éxito
    form.resetFields();
    message.success('¡Gracias por tu generosidad! Tu donación ha sido registrada.');
  };

  return (
    <div className="background">
      <Navbar />
      
      {/* Banner */}
      <div className="banner-container">
        <img src={banner} alt="Banner de Donaciones" className="banner-image" />
      </div>

      <div className="donaciones-container">
        <Title level={2} className="donaciones-title">
          Dona y ayuda a los animales
        </Title>
        <Paragraph className="donaciones-description">
          Tu aporte puede marcar la diferencia. ¡Gracias por tu generosidad!
        </Paragraph>

        {/* Tarjeta con el formulario */}
        <Card className="donacion-card" bordered={false}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Monto"
              name="amount"
              rules={[
                { required: true, message: 'Por favor ingresa un monto' },
                
              ]}
            >
              <Input type="number" prefix="$" placeholder="0.00" />
            </Form.Item>
            <Form.Item label="Alias" name="message">
              <Input.TextArea placeholder="Escribe alias de fundacion/veterinaria/refugio" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Donar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default Donaciones;
