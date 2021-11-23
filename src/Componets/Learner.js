import { Container, Navbar, Nav, Row, Stack } from "react-bootstrap";
import AppStore from "./code2.png"
import Code from "./doc.png"
import Trending from "./star.png"

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

  
function Learner() {

return (
<> 
<Container fluid className="p-0">
<back3 style={divStyle}> 
<h2><big>🎓 Learner</big></h2>
<Stack  className="col-md-4 mx-auto" style= {centerStackStyle} gap={2} direction="horizontal" >
    
<Stack className="" gap={3} direction="vertical">
    <img className= "icon" src= {AppStore} img/>
    <img className= "icon" src= {Code} img/>
    <img className= "icon" src= {Trending} img/>
    
    </Stack>
    
   
    <Stack  gap={3} direction="vertical">
    <h4>Knowledgeable in 4 Languages</h4>
    <h4>Awarded English Academic Excellence Award</h4>
    <h4>4.14 High School GPA</h4>
    </Stack>
  
    
   
    
    </Stack>
    
    </back3>
    </Container>
</>

);
}
export default Learner;