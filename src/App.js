// App.js
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Home from './pages/DashboardPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;