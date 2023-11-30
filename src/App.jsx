// Ganti nama komponen dan ekspor
import './index.css';
import {
  BrowserRouter as Router,
  Routes,Route,
} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import { AuthProvider } from './auth';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/Profile/Profile';

// Ganti nama fungsi dari App menjadi Main
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
