const { compile } = require('svelte/compiler');
const { transform } = require('@babel/core');

module.exports = {
    process(src, filename) {
        const result = compile(src, {
            filename,
        });

        return transform(result.js.code, { filename });
    },
};
