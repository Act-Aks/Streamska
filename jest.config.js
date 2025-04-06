/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
    setupFiles: ['<rootDir>/src/__specs__/setupTests.ts'],
}
