import { Stack, Container, Col, Row, Button} from 'react-bootstrap';
import { useSpring, animated, Transition, show, conf} from 'react-spring'
import Mockup1 from './mockup1.svg'
import Mockup2 from './mockup2.svg'
import Andreas from './Andreasi.svg'

function Home()
{

const animation = useSpring({
    from: {transform: 'translateY(0px)', opacity: 0 },
    leave: {transform: 'translateY(-4%)'},
    loop: false,
    to: async next => {
            
            await next({transform: 'translateY(6%)', opacity: 1});
           
    
    }
});
const animation2 = useSpring({
    from: {transform: 'translateY(0px)', opacity: 0 },
    leave: {transform: 'translateY(-75px)'},
    loop: false,
    config: { duration:  1000, tension: 50, friction: 50},
    to: async next => {
            
            await next({transform: 'translateY(25%)', opacity: 1});
           
    
    }
});
const divStyle = {
   width: "85%"

  };

  const divStyle2 = {
    width: "105%",
   };
const AndreasAnimation = useSpring({
    from: {transform: 'translateY(0px)', opacity: 0 },
    leave: {transform: 'translateY(0px)'},
    loop: false,
    config: { duration:  1000, tension: 120, friction: 100},
    to: async next => {
            
            await next({transform: 'translateY(30px)', opacity: 1});
           
    
    }
});

    return(
        <div> 
             <div className="ball" style={AndreasAnimation}> <img style={divStyle} src={Andreas} width = "85%"></img></div>
             <Stack direction="vertical" gap={3}>
                 
             <Stack direction="horizontal" gap={3}>
            
          <div class= "zstack">
              
          </div>
           </Stack>
           </Stack>
       <Container>
           <Row>
           
           <Col><div className="ball" style={animation}> <img className= "mockup" src={Mockup1} style={divStyle2} alt="Logo" /> <div className="d-grid gap-2"></div>
           </div></Col>
           <Col><div className="ball" style={animation2}> <img src={Mockup2} className= "mockup" style={divStyle2} alt="Logo" /><div className="d-grid ms-auto">{' '}</div>;</div>
           <div className="ball" style={animation2}> <div className="d-grid ms-auto"></div></div>
           </Col>
           </Row>
       </Container>
      
        </div>
        
    );
}
export default Home;