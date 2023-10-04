import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes >
        <Route path='/' element = {<Home />} />
        <Route path='/cart' element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
