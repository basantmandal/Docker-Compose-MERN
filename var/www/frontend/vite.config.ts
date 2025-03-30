import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3002, // Change this to your desired port
        watch: {
            usePolling: true, // 👈 Enables polling to detect changes
        },
        host: true, // 👈 Ensures Vite listens to all network interfaces
    },
    plugins: [react()],
});
