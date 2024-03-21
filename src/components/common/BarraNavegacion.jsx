import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className='d-flex align-items-center'>
            <img src="https://cdn-icons-png.freepik.com/256/1830/1830839.png" alt="logoRollingRecetas" className='img-fluid' width={75}/>
            <p className='display-6 mt-3 ms-3'>RollingRecetas</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <NavLink end to='/registro' className='nav-link'>Iniciar Sesión / Registrarme</NavLink>
            <NavLink end to='/admin' className='nav-link'>Administrador</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNavegacion;
