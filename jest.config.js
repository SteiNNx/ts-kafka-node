console.log('Root Directory:', __dirname);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/src/impl/components/kafka/__mocks__/'],
  testMatch: ['<rootDir>/src/__tests__/**/*.spec.ts'],
};
