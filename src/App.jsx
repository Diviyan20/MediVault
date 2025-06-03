import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import './App.css'
import Login from './pages/login'
import Dashboard from './pages/dashboard';
import Register from './pages/registration';
import MedicalEntries from './pages/medical-entries';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* Redirect base route to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/medical-entries" element={<MedicalEntries />} />
      <Route path="/profile" element={<ProfilePage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App
