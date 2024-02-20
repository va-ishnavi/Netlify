import './App.css';
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
