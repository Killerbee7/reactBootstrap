import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample(props) {
  return (
    <>
     
      <Navbar bg={`navbar bg-${props.mode}`} variant="dark">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">ADD Recipe</Nav.Link>
            <Nav.Link href="#pricing">Browse Recipe</Nav.Link>
          </Nav>
          <div className="form-check form-switch">
  <input onClick={props.toggleMode}  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label text-light"  htmlFor="flexSwitchCheckDefault">{props.modeName}</label>
</div>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;