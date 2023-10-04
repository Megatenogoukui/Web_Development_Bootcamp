import './App.css';
import { Link, Outlet, Routes , Route } from 'react-router-dom';
import Layout from './components/Layout';
import Expenses from './components/Expenses';
import Invoices from './components/Invoices';
import Random from './components/Random';

function App() {
  return (
    <Routes >
      <Route path = '/' element = {<Layout />} > 
        <Route path = '/expense' element = {<Expenses />} />
        <Route path = '/invoice' element = {<Invoices />} />
        <Route path=':id' element = {<Random />} />
      </Route>
    </Routes>
  );
}

export default App;