import './main.scss'
import Navigation from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>

        <Routes>
          <Route exact path="/" element={<Hero/>} />
            
          <Route path="/About" element={<About/>} />
          
          <Route path="/Contact" element={<Contact/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
