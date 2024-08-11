import React from 'react';
import ReactDOM from 'react-dom/client';
import SoundButtons from './SoundButtons.jsx'; 
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <SoundButtons /> 
    </div>
  </React.StrictMode>,
);
