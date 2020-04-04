module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': './svelte-transformer',
    },
    moduleFileExtensions: ['js', 'svelte'],
    testPathIgnorePatterns: ['node_modules'],
    transformIgnorePatterns: ['node_modules'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
