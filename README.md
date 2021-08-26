# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 使用旧版 Vue CLI

```bash
# 安装
npm install vue-cli -g
# 初始化
npm init webpack travel
```

## 移动端适配

```bash
# 解决移动端 300ms 点击延迟问题
npm install fastclick --save
```

border.css 解决 1px 边框问题

## Vue 代码格式化

```json
// .prettierrc
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

## 其他

```bash
npm install stylus --save
# 指定版本stylus-loader@3.0.2，版本过高时，使用<style lang='stylus' scoped><style>会报错
npm install stylus-loader@3.0.2 --save

npm install swiper vue-awesome-swiper@2.6.7 --save
```

图标对应的字体编码：
`搜索 &#xe67d;、返回 &#xe685;、向下箭头 &#xe688;`

build文件夹下的webpack.base.conf.js 找到alias，设置别名`'styles': resolve('src/assets/styles')`

styles文件夹下有variables.styl文件，用于定义存放stylus变量；在css中引入其他css，并想要使用别名styles时，需要加~，如`@import '~styles/variables.styl'`

`import Vue from 'vue'`和`require('vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css')` 中的路径等相对的都是travel下的node_modules文件夹

## git 分支及合并等

```bash
git branch index-swiper
git checkout index-swiper
# 进行程序设计...设计完成后，在index-swiper分支下
git add .
git commit -m 'add home-swiper'
git push  #  提示用 git push --set-upstream origin index-swiper
# 切换到main分支
git checkout main
git merge origin/index-swiper
git push

```
