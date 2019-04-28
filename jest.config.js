module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
    modulePathIgnorePatterns:["<rootDir>/node_modules/","<rootDir>/public/","<rootDir>/src/"],
    modulePaths: ["<rootDir>"],
    testMatch:[ '**/__tests__/*.test.ts?(x)' ],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"]

};

// 配置options https://kulshekhar.github.io/ts-jest/user/config/