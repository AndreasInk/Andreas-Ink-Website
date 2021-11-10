import { Container, Navbar, Nav, Row, Stack } from "react-bootstrap";
import AppStore from "./AppStore.png"
import Code from "./Code.png"
import Trending from "./Trending.png"

const divStyle = {
    margin: "auto",
    width: "95%",

  };
  

function Dev() {

return (
<> 
<Container fluid className="p-0">
<back> 
<h2><big>🛠 Developer</big></h2>
<Stack  className="col-md-5 mx-auto" gap={2} direction="horizontal">
    
<Stack className="" gap={3} direction="vertical">
    <img className= "icon" src= {AppStore} img/>
    <img className= "icon" src= {Code} img/>
    <img className= "icon" src= {Trending} img/>
    
    </Stack>
    
   
    <Stack className="" gap={3} direction="vertical">
    <h4>7 Apps On The App Store</h4>
    <h4>4/7 Hackathons Won</h4>
    <h4>23rd Ranked App on The App Store For Medical Apps</h4>
    </Stack>
  
    
   
    
    </Stack>
    
    </back>
    </Container>
</>

);
}
export default Dev;