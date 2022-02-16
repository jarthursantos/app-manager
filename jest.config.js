/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    './src/**/*.[jt]s',
    '!**/node_modules/**',
  ],
  coverageReporters: ['text', 'json-summary', 'lcov'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
