module.exports = {
  ...require('./jest-common'),
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverageFrom: ['**/src/**/*.{js,ts}'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
    '^.+\\.js$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['**/src/**/*.{js,ts}'],
  coverageThreshold: null,
}
