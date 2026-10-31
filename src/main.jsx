// Ensure window.fetch has a working setter in iframe preview environments
try {
  let _fetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => _fetch,
    set: (val) => { _fetch = val; },
    configurable: true,
    enumerable: true
  });
} catch (e) {}

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initWhatsAppInterceptor } from './utils/whatsapp.js';

// Initialize context-aware WhatsApp URL handler
initWhatsAppInterceptor();

createRoot(document.getElementById('root')).render(<App />);

