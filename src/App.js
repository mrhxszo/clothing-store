import { Shop } from "./Shop";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
