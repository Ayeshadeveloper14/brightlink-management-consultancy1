import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import contactRoutes from './backend/routes/contactRoutes.js';
import inquiryRoutes from './backend/routes/inquiryRoutes.js';
import authRoutes from './backend/routes/authRoutes.js';
import { connectDB } from './backend/config/db.js';
import { errorHandler } from './backend/middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  // Parse port from CLI args (--port <val>) or environment variable
  let PORT = 3000;
  const portArgIndex = process.argv.indexOf('--port');
  if (portArgIndex !== -1 && process.argv[portArgIndex + 1]) {
    PORT = parseInt(process.argv[portArgIndex + 1], 10);
  } else if (process.env.PORT) {
    PORT = parseInt(process.env.PORT, 10);
  }

  // Initialize Data Layer
  await connectDB();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Mount API Endpoints
  app.use('/api/contact', contactRoutes);
  app.use('/api/inquiries', inquiryRoutes);
  app.use('/api/auth', authRoutes);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'online',
      brand: 'BrightLink Typing & Consulting',
      location: 'Business Bay, Dubai, UAE',
      timestamp: new Date().toISOString()
    });
  });

  // Serve static assets from public folder (images, videos, posters, favicon)
  app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
  app.use('/videos', express.static(path.join(__dirname, 'public', 'videos')));
  app.use('/src/assets/images', express.static(path.join(__dirname, 'public', 'images')));
  app.use(express.static(path.join(__dirname, 'public')));

  // Determine production vs dev mode
  const distIndexPath = path.join(__dirname, 'dist', 'index.html');
  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    // If production build is missing, compile it on the fly
    if (!fs.existsSync(distIndexPath)) {
      console.log('Production build not found in dist/. Running vite build...');
      try {
        execSync('npx vite build', { stdio: 'inherit' });
      } catch (err) {
        console.error('Error during automatic vite build:', err);
      }
    }

    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) {
        return next();
      }
      res.sendFile(distIndexPath);
    });
  } else {
    // Development mode with Vite middleware
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false 
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);

    // Guaranteed SPA HTML route fallback for dev mode
    app.get('*', async (req, res, next) => {
      if (req.path.startsWith('/api')) {
        return next();
      }
      try {
        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  }

  // Error handling middleware
  app.use(errorHandler);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`BrightLink Full-Stack Server active on http://0.0.0.0:${PORT} [${isProduction ? 'PRODUCTION' : 'DEV'}]`);
  });
}

startServer();
