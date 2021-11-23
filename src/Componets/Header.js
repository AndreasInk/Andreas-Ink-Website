import { Container, Navbar, Nav } from "react-bootstrap";
import Ai from "./Ai.svg"
import AndreasInkResume from './AndreasInkResume.pdf'
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
    <Nav.Link href="https://andreasink17.medium.com">Blog</Nav.Link>
    <Nav.Link href={AndreasInkResume} target="_blank">Resume</Nav.Link>
    
  </Navbar>
</>
);

}
export default Header;
