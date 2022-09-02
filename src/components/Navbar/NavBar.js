import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import Cardwidget from "../CardWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div className="dNav" >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  {/*<Navbar.Brand href="#home">Cerveceria Artesanal</Navbar.Brand>*/}
  <Logo />
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#features">Inicio</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Cervezas</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tragos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hamburguesas</NavDropdown.Item>
        {/*<NavDropdown.Divider />*/}
        <NavDropdown.Item href="#action/3.4">Picadas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Nosotros</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contacto
      </Nav.Link>
    </Nav>
    <Nav>
  <Cardwidget />
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar