import { Container, Navbar, Nav } from "react-bootstrap";
import Ai from "./Ai.svg"
function Header() {

return (

<>
  <br />
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Ai}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     
      </Navbar.Brand>
    </Container>
    
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#home">Projects</Nav.Link>
    <Nav.Link href="#home">Resume</Nav.Link>
    
  </Navbar>
</>
);

}
export default Header;
