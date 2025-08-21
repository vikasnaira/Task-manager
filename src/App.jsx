import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './Components/Login';
import Client from './Components/Client';
import Boss from './Components/Boss';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

           <Route path="/login" element={<Loginpage />} />
          <Route path="/client" element={<Client />} />
          <Route path="/boss" element={<Boss />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
