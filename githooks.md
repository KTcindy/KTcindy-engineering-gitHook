 "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx}": [
      "prettier --write",
      "vue-cli-service lint",
      "git add"
    ]
  },

  1、当我们git add添加到暂存区时
  2、git commit -m '提交信息' 时这个时候 husky 这个注册在git pre-commit的钩子调起lint-staged  （我的理解 husky 就是连接git的桥梁）
  3、这个时候pre-commit 调起了lint-staged，lint-staged取得了所有被提交的写好的文件 通过eslint和Prettier校验一遍 