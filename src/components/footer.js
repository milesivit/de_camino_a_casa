// FooterComponent.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#24242c ', color: 'white', textAlign: 'left', padding: '5px', height: '70px', lineHeight: '60px', marginTop: '2%' }}>
    <div style={{ marginLeft: '1%' }}>© 2024. Todos los derechos reservados.</div>
  </Footer>
);

export default FooterComponent;
