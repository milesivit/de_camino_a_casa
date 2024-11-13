import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import { Layout, Menu, Dropdown, Avatar, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import perro from '../img/perro.png';
import huella from '../img/logo.png';
import '../css/Navbar.css';

const { Header } = Layout;

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Listener para detectar el cambio de tamaño de pantalla
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/SeccionAnimal">Sección Animal</Link></Menu.Item>
      <Menu.Item key="5"><Link to="/Donaciones">Donaciones</Link></Menu.Item>
      <Menu.Item key="6"><Link to="/Tienda">Tienda</Link></Menu.Item>
      <Menu.Item key="7"><Link to="/informacionVet">Refugios-Veterinarias</Link></Menu.Item>
      <Menu.Item key="8"><Link to="/TestPersonalidad">Test</Link></Menu.Item>
      <Menu.Item key="9"><Link to="/Noticias">Noticias</Link></Menu.Item>
      <Menu.Item key="10"><Link to="/SobreNosotros">Sobre Nosotros</Link></Menu.Item>
      <Menu.Item key="11"><Link to="/EntidadesAsociadas">Entidades Asociadas</Link></Menu.Item>
      <Menu.Item key="12"><Link to="/ayuda">Ayuda</Link></Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="custom-header">
        <Link to="/" className="logo-link">
          <img src={huella} alt="Ticket" className="header-logo" />
        </Link>
        
        {/* Menú horizontal para pantallas grandes */}
        {!isMobile && (
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="custom-menu">
            <Menu.Item key="2" className="custom-nav-button">
              <Link to="/SeccionAnimal">Sección Animal</Link>
            </Menu.Item>
            <Menu.Item key="5" className="custom-nav-button">
              <Link to="/Donaciones">Donaciones</Link>
            </Menu.Item>
            <Menu.Item key="6" className="custom-nav-button">
              <Link to="/Tienda">Tienda</Link>
            </Menu.Item>
            <Menu.Item key="7" className="custom-nav-button">
              <Link to="/informacionVet">Refugios-Veterinarias</Link>
            </Menu.Item>
            <Menu.Item key="8" className="custom-nav-button">
              <Link to="/TestPersonalidad">Test</Link>
            </Menu.Item>
            <Menu.Item key="9" className="custom-nav-button">
              <Link to="/Noticias">Noticias</Link>
            </Menu.Item>
            <Menu.Item key="10" className="custom-nav-button">
              <Link to="/SobreNosotros">Sobre Nosotros</Link>
            </Menu.Item>
            <Menu.Item key="11" className="custom-nav-button">
              <Link to="/EntidadesAsociadas">Entidades Asociadas</Link>
            </Menu.Item>
          </Menu>
        )}
        
        {/* Avatar permanece igual */}
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <Avatar
            className="img-rounded"
            size={40}
            src={perro}
            style={{ verticalAlign: 'middle', marginLeft: '1%' }}
          />
        </Dropdown>
      </Header>
    </Layout>
  );
}

export default Navbar;
