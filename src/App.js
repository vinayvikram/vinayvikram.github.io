import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
