module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {
    "indent": ["error", 2],
    "semi": ["error","never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-html": false
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}