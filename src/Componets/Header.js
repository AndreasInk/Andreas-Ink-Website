import { Container, Navbar, Nav } from "react-bootstrap";
import Ai from "./Ai.svg"
import AndreasInkResume from './AndreasInkResume.pdf'
import { Link } from "react-router-dom";
function Header() {

return (

<>
  <br />
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/home">
        <img
          alt=""
          src={Ai}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
     
      </Navbar.Brand>
    </Container>
    
    <Link className='navBarLink' to="/home">  Home  </Link> |
    <Link className='navBarLink' to="/apps">  Apps  </Link> |  
    <Link className='navBarLink' to="https://andreasink17.medium.com" target="_blank">  Blog  </Link> |
    <Link className='navBarLink' to={AndreasInkResume} target="_blank">  Resume  </Link> 
    {/* <Nav.Link to={AndreasInkResume} target="_blank">Blog</Nav.Link>
    <Nav.Link href={AndreasInkResume} target="_blank">Resume</Nav.Link> */}
    
  </Navbar>
</>
);

}
export default Header;
