module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/script-indent": ["error", 2, {
      "baseIndent": 0,
      "switchCase": 0,
      "ignores": []
    }],
    "vue/no-v-html": false
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
