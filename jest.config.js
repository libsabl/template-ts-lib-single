/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^\\$/(.*)$': path.join(__dirname, 'src/$1'),
    '^\\$test/(.*)$': path.join(__dirname, 'test/$1'),
  },
  collectCoverageFrom: ['src/**/*.ts'],
};
