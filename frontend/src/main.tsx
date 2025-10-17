import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ModuleDataProvider from './components/file_upload/ModuleDataProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/upload" element={<ModuleDataProvider />} />
        <Route path="/modules" element={<ModuleDataProvider />} />
      </Routes>
    </Router>
  </StrictMode>,
)

// Add type declaration for react-dom/client
declare module 'react-dom/client';
