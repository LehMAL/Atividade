import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NaviBarComponent() {

  return (

    <Navbar expand="sm" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand href=""><h3>Menu</h3></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/form">Formulário</Nav.Link>
            <Nav.Link href="/us">Sobre Nós</Nav.Link>
               
          </Nav>
    
        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}

export default NaviBarComponent;