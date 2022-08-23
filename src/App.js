import './assets/css/App.css';
import "./config/baseUrl"

// Components
import Part1 from './components/Part1';
import Part2 from './components/Part2';

function App() {
  return (
    <div className="App">
      <Part1 /> 
      <Part2 />
    </div>
  );
}

export default App;
