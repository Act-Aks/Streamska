/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!react-native|react-native-.*|react-navigation-.*|@react-navigation|@react-native-.*)/',
    ],
    setupFiles: ['<rootDir>/src/__specs__/setupTests.ts'],
    clearMocks: true,
    cacheDirectory: '.jest/cache',
}
