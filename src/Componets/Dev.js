import { Container, Navbar, Nav, Row, Stack } from "react-bootstrap";
import AppStore from "./git.png"
import Code from "./fork.png"
import Trending from "./calendar.png"

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

  
function Dev() {

return (
<> 
<Container fluid className="p-0">
<back2 style={divStyle}> 
<h2><big>🛠 Developer</big></h2>
<Stack  className="col-md-4 mx-auto" style= {centerStackStyle} gap={2} direction="horizontal" >
    
<Stack className="" gap={3} direction="vertical">
    <img className= "icon" src= {AppStore} img/>
    <img className= "icon" src= {Code} img/>
    <img className= "icon" src= {Trending} img/>
    
    </Stack>
    
   
    <Stack  gap={3} direction="vertical">
    <h4>50 Open Sourced Repos on Github</h4>
    <h4>1,400 Contributions On Github In 2021</h4>
    <h4>4 Years Of Software Development Experience</h4>
    </Stack>
  
    
   
    
    </Stack>
    
    </back2>
    </Container>
</>

);
}
export default Dev;