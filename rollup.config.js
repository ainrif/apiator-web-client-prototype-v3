import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import preprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.js',
    output: {
        file: 'public/build/bundle.js',
        format: 'iife',
        name: 'app',
    },
    plugins: [
        svelte({
            dev: !production,
            css: (css) => {
                css.write('public/build/bundle.css');
            },
            preprocess: preprocess(),
        }),
        resolve(),
        commonjs(),
        image(),
        json(),
        typescript(),
        !production &&
            serve({
                contentBase: 'public',
            }),
    ],
};
