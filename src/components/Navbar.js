import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/reset.css';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import perro from '../img/perro.png';
import huella from '../img/logo.png';
import '../css/Navbar.css'; // Importa después del CSS de Ant Design

const { Header } = Layout;

function Navbar() {
  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1"><Link to="/ayuda">Ayuda</Link></Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="custom-header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="custom-menu">
          <Menu.Item key="1" className="custom-nav-button">
            <Link to="/">
              <img src={huella} alt="Ticket" className="header-logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="custom-nav-button">
            <Link to="/SeccionAnimal">Seccion Animal</Link>
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
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <Avatar
            className="img-rounded"
            size={40}
            src={perro}
            style={{ verticalAlign: 'middle', marginRight: '1%' }}
          />
        </Dropdown>
      </Header>
    </Layout>
  );
}

export default Navbar;
