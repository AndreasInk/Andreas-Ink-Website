import logo from './logo.svg';
import './App.css';

import Home from './Componets/Home';
import Dev from './Componets/Dev';
import Innovator from './Componets/Innovator';
import 'bootstrap/dist/css/bootstrap.min.css';
import Learner from './Componets/Learner';
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
function App() {
  return (
    <div className="App">
      
      <Home> </Home>
      
  <Innovator></Innovator>
      <Dev> </Dev>
      <Learner> </Learner>

    </div>
  );
}

export default App;
