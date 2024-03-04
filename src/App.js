import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Pl from './components/players';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pl/>
    </div>
  );
}

export default App;
