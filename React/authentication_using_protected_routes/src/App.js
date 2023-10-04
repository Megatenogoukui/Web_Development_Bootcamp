
import './App.css';
import { Outlet, Route ,Routes } from 'react-router-dom';
import Home from './component/Home';
import Homecontent from './component/Homecontent';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Setting from './component/Setting';
function App() {
  return (
    <>
      <Routes>
        <Route path= "/" element={<Home /> } >
          <Route index element={<Homecontent />} />
          <Route path= "login" element={<Login />} />
          <Route path= "dashboard" element={<Dashboard />} />
          <Route path= "setting" element={<Setting />} />

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
