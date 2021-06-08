module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort"],
  extends: [
    "eslint:recommended",

    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",

    "plugin:eslint-comments/recommended",

    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // this rule doesn't play well with nested styled-components interpolations
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    // simple-import-sort rules aren't enabled by default
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
  },
};
