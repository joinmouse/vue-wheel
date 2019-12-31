module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    moduleFileExtensions: [
        'js',
        'vue'
    ],
    testMatch: ['**/test/**/*.spec.js'],
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"]
}