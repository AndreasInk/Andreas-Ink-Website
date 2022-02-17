import { Container, Navbar, Nav, Row, Stack } from "react-bootstrap";
import AppStore from "./AppStore.png"
import Code from "./Code.png"
import Trending from "./Trending.png"

const divStyle = {
    margin: "auto",
    paddingTop: "7%",
  
  };
  
  const stackStyle = {
    margin: "auto",
    

  };
  const centerStackStyle = {
    margin: "auto",
    alignItems: "center",
    paddingBottom: "10%",
    overflow: "auto"
  };

  
function Innovator() {

return (
<> 
<Container fluid className="p-0">
<back style={divStyle}> 
<h2><big>💡 Innovator</big></h2>
<Stack  className="col-md-4 mx-auto" style= {centerStackStyle} gap={2} direction="horizontal" >
    
<Stack className="" gap={3} direction="vertical">
    <img className= "icon" src= {AppStore} img/>
    <img className= "icon" src= {Code} img/>
    <img className= "icon" src= {Trending} img/>
    
    </Stack>
    
   
    <Stack  gap={3} direction="vertical">
    <h4>7 Apps On The App Store</h4>
    <h4>5/8 Hackathons Won</h4>
    <h4>23rd Ranked App on The App Store For Medical Apps</h4>
    </Stack>
  
    
   
    
    </Stack>
    
    </back>
    </Container>
</>

);
}
export default Innovator;