import Home from './Components/Home';
import Experience from './Components/Experience';
import './App.css';
import { BrowserRouter as Router,Routes,
  Route
   } from "react-router-dom";


function App() {
  return (
    <div>
    <Router>
    
  
 
    <Routes>
          
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Experience" element={<Experience/>}/>
        </Routes>

    </Router>
    </div>
  );
}

export default App;
