import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/server_app';
const baseTestDir = '<rootDir>/src/test';

 const testDir = "<rootDir>/src/app/test_test"

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
        // `${testDir}/**/*.ts`
    ],
    testMatch:[
        `${testDir}/**/*.ts`
        // `${baseTestDir}/server_app4/data/**/*test.ts`,
        // `${baseTestDir}/server_app4/**/*test.ts`,
        // `${baseTestDir}/Utils.test.ts`
    ]
}

export default config;