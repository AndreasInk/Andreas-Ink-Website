import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Dev from './Componets/Dev';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Header></Header>
      <Home> </Home>
      
  
      <Dev> </Dev>
<Footer> </Footer>
    </div>
  );
}

export default App;
