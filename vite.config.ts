// import * as reactPlugin from 'vite-plugin-react'
// import type { UserConfig } from 'vite'

// const config: UserConfig = {
//   jsx: 'react',
//   plugins: [reactPlugin]
// }

// export default config

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        loader: 'tsx',
    },
    root: './',
    build: {
        outDir: './dist',
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
                '.ts': 'tsx',
            },
        },
        include: ['@emotion/styled', '@emotion/react', '@mui/material'],
    },
    plugins: [react(), tsconfigPaths(), svgr()],
});