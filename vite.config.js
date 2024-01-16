import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration: https://vitejs.dev/config/
export default defineConfig({
  // Enable the Vite React plugin for handling React components
  plugins: [react()],

  // Specify assets that should be treated as part of the build
  assetsInclude: ["**/*.png","**/*.PNG", "**/*.jpg","**/*.JPG", "**/*.jpeg","**/*.JPEG", "**/*.gif", "**/*.svg"],
});
