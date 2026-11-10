import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, 'resources/js'),
            '@inertiajs/react': path.resolve(import.meta.dirname, 'resources/js/lib/inertia-shim.tsx'),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public',
});
