import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Loginpage from './Components/Auth/Login';
import Client from './Components/Dashboard/Client';
import TaskManagerBossUI from './Components/Dashboard/Admin';
import { useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from './Components/utils/LocalStorage';
const App = () => {
  
   useEffect(() => {
    // setLocalStorage();
   getLocalStorage();
   const data = getLocalStorage();
    
  },) 

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"  />} />
           <Route path="/login" element={<Loginpage  />} />
          <Route path="/client" element={<Client />} />
          <Route path="/boss" element={<TaskManagerBossUI />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
