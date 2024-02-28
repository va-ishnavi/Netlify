import './App.css';
import Nav from "./Components/Nav";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from './Components/Project';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
