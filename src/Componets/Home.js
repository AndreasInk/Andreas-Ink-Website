import { Stack, Container, Col, Row, Button} from 'react-bootstrap';
import { useSpring, animated, Transition, show, conf} from 'react-spring'
import Mockup1 from './mockup1.svg'
import Mockup2 from './mockup2.svg'
import Andreas from './Andreasi.svg'

function Home()
{

const animation = useSpring({
    from: {transform: 'translateY(-60%)', opacity: 0 },
    leave: {transform: 'translateY(-100px)'},
    loop: false,
    config: { duration:  1000, tension: 50, friction: 50},
    to: async next => {
            
            await next({transform: 'translateY(6%)', opacity: 1});
           
    
    }
});
const animation2 = useSpring({
    from: {transform: 'translateY(-50%)', opacity: 0 },
    leave: {transform: 'translateY(-100px)'},
    loop: false,
    config: { duration:  1000, tension: 50, friction: 50},
    to: async next => {
            
            await next({transform: 'translateY(25%)', opacity: 1});
           
    
    }
});
const divStyle = {
   width: "85%"

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
             <animated.div className="ball" style={AndreasAnimation}> <img style={divStyle} src={Andreas} width = "85%"></img>;</animated.div>
             <Stack direction="vertical" gap={3}>
                 
             <Stack direction="horizontal" gap={3}>
            
          <div class= "zstack">
              
          </div>
           </Stack>
           </Stack>
       <Container>
           <Row>
           <Col><animated.div className="ball" style={animation}> <img className= "mockup" src={Mockup1} style={divStyle} alt="Logo" /> <div className="d-grid gap-2"><Button className= "button-bold" size="lg" variant="primary">Explore Andreas’s Work</Button></div>
           </animated.div></Col>
           <Col><animated.div className="ball" style={animation2}> <img src={Mockup2} className= "mockup" style={divStyle} alt="Logo" /><div className="d-grid ms-auto">{' '}</div>;</animated.div>
           <animated.div className="ball" style={animation2}> <div className="d-grid ms-auto"><Button  className= "button-bold" size= "lg" variant="primary" style={{fontFamily:"Catamaran", fontweight: "500"}} >Chat With Andreas</Button></div></animated.div>
           </Col>
           </Row>
       </Container>
      
        </div>
        
    );
}
export default Home;