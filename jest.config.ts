import type { Config } from "jest";
import * as path from "path";

const config: Config = {
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.app.json",
    },
  },
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  moduleNameMapper: {
    "^@assets/(.*)$": path.resolve(__dirname, "src/assets/$1"),
    "^@categories/(.*)$": path.resolve(__dirname, "src/modules/categories/$1"),
    "^@error/(.*)$": path.resolve(__dirname, "src/modules/error/$1"),
    "^@home/(.*)$": path.resolve(__dirname, "src/modules/home/$1"),
    "^@shared/(.*)$": path.resolve(__dirname, "src/modules/shared/$1"),
    "^@routes/(.*)$": path.resolve(__dirname, "src/routes/$1"),
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
  ],
};

export default config;
