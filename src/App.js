import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (

    <Router>
      <PreNavbar />
      <Navbar />
    </Router>
  );
}

export default App;
