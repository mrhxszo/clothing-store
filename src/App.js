import { Shop } from "./Shop";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Navbar from "./Components/Navbar";
import Basket from "./Basket";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes
} from "react-router-dom";
import { Electronics, Jewelery, MensClothing, Newest, WomensClothing } from './Components/ProductContainers';



const App = () => {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Shop/' element={<Shop/>}>
              <Route path = '' element={<Newest/>}/>
              <Route path = 'jewelery' element={<Jewelery/>}/>
              <Route path="electronics" element={<Electronics/>}/>
              <Route path="men's-clothing" element={<MensClothing/>}/>
              <Route path="women's-clothing" element={<WomensClothing/>}/>
          </Route>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Basket' element={<Basket/>}/>
        </Routes>
    </Router>
  );
}

export default App;
