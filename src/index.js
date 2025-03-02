// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
