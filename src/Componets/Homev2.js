import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Home from './Home';
import Dev from './Dev';
import Innovator from './Innovator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Learner from './Learner';
import AppShowCase from './AppShowCase';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function Footer() {
  return (
    
    <div id= "app__footer">
       <div id= "btn__group">
      <button onClick={function() {
window.open("https://www.linkedin.com/in/andreas-ink")
      }}> 

      </button>
      <button onClick={() => {
window.open("https://www.github.com/AndreasInk");
      }}> 

      </button>
      </div>
    </div>
    
  )
}
function Homev2() {
  return (
    <div className="App">
      
      <Header></Header>
      <Home> </Home>
      
  <Innovator></Innovator>
      <Dev> </Dev>
      <Learner> </Learner>

    </div>
  );
}

export default Homev2;
