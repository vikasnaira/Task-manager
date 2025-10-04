import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './Components/Auth/Login';
import Client from './Components/Dashboard/Client';
import TaskManagerBossUI from './Components/Dashboard/Admin';
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
           <Route path="/login" element={<Loginpage />} />
          <Route path="/client" element={<Client />} />
          <Route path="/boss" element={<TaskManagerBossUI />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
