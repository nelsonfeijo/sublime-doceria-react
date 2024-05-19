import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/layout/Navbar/Navbar';
import Container from './components/layout/Container/Container';
import Home from './components/page/Home/Home';
import About from './components/page/About/About';
import Cart from './components/page/Cart/Cart';
import Menu from './components/page/Menu/Menu';
import Footer from './components/layout/Footer/Footer';

function App() {

  return (
    <Router>
      
      <Navbar />
       <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Menu />} />
        <Route path='/company' element={<Cart/>} />
        <Route path='/contact' element={<About />} />
        </Routes>
      </Container>
    <Footer /> 
    </Router>
  );
}

export default App
