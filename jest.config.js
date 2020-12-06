module.exports = {
    verbose: true,
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
        '^.+\\.svelte$': './svelte-transformer',
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'svelte'],
    testPathIgnorePatterns: ['node_modules'],
    transformIgnorePatterns: ['node_modules'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
