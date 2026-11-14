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

// Google Maps Platform Tier 1 quota & auth failure listener
window.gm_authFailure = () => {
  window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
};
const origConsoleError = console.error;
console.error = (...args) => {
  origConsoleError.apply(console, args);
  const msg = args.map((a) => String(a)).join(' ');
  if (msg.includes('OverQuotaMapError') || msg.includes('QuotaExceededError')) {
    window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
  }
};

createRoot(document.getElementById('root')).render(<App />);

