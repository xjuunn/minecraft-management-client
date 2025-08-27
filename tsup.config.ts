import { defineConfig } from 'tsup';
export default defineConfig([
    {
        entry: ['src/index.ts'],
        format: ['cjs'],
        outDir: 'dist/cjs',
        dts: false,
        sourcemap: true,
        clean: true,
    }, {
        entry: ['src/index.ts'],
        format: ['esm'],
        outDir: 'dist/esm',
        dts: false,
        sourcemap: true,
        clean: false
    }, {
        entry: ['src/index.ts'],
        format: ['iife'],
        dts: true,
        outDir: 'dist/types',
        clean: false,
    }
])