import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      include: "**/*.svg",
    }),
  ],
  build:{
    commonjsOptions: {
      esmExternals: true 
   },
  },
  server: {
    origin: 'http://127.0.0.1:3700',
  },
});
