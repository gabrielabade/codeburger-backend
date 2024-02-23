module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    camelcase: "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
