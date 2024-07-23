// jest.config.js
export default {
    preset: 'ts-jest/presets/default-esm', // Usar el preset para módulos ES
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.json',
          useESM: true, // Activar el uso de módulos ES
        },
      ],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    globals: {
      'ts-jest': {
        useESM: true, // Global config to use ES modules
      },
    },
  };
  