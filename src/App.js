import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Quotegenerator from './components/Quotegenerator';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'linear-gradient(to right, #E0F4FF, #C683D7)'}}>
      <Router>
          <div className="container">
            <Routes>
            <Route path = "/" element={<Quotegenerator/>}></Route>
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;