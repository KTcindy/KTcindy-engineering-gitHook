module.exports = {
  env: {
    //   运行环境
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0, //类型校验 0 关闭
    indent: ["error", 2], //缩进 2错误
    "linebreak-style": 1, // 换行 1警告
    quotes: ["error", "double"], //引号 double 双引号  single 单引号  backtick 反引号
    "react/no-unknown-property": 0, //关闭 未知名称
  },
};
