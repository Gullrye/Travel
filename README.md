# Travel webapp

> A Vue.js project
> Vue 2.x

## 使用新版 Vue CLI

```bash
# 安装
npm install -g @vue/cli
# 初始化
vue create travel
```

## 移动端适配

解决移动端 300ms 点击延迟问题

```bash
<meta name="viewport" content="width=device-width">
html {
  touch-action: manipulation;
}

# 参考：https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away
```

使用 border.css 解决 1px 边框问题。

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

## git 分支及合并等

```bash
# 例
git branch index-swiper
git checkout index-swiper
# 进行程序设计...设计完成后，在index-swiper分支下
git add .
git commit -m 'add home-swiper'
git push --set-upstream origin index-swiper
# 切换到main分支
git checkout main
git merge origin/index-swiper
git push
```

## 深度选择器

引用第三方组件之后，如果需要在组件中局部修改第三方组件的样式，而又不想去除 scoped 属性造成组件之间的样式污染，用 `>>>` 方式，就可以穿透 scoped 了。

## 其他

```bash
npm install axios --save

npm install stylus --save
# 指定版本stylus-loader@3.0.2，版本过高时，使用<style lang='stylus' scoped><style>会报错
npm install stylus-loader@3.0.2 --save # 新版脚手架已自带

npm install swiper vue-awesome-swiper@2.6.7 --save

# 解决移动端（已支持 PC）各种滚动场景需求的插件
npm install better-scroll@1.8.1 --save # 1.x版本直接在 mounted 初始化就能使用
# or 
import BScroll from '@better-scroll/core' # 2.x版本使用过程中有问题，得在 updated 中初始化才能滚动，因为 content 在 mounted 时高度不过高
let bs = new BScroll('.wrapper', {
  // ...... 详见配置项
})

# 使用 vuex 实现数据共享，来设置所在城市
npm install vuex@3.0.1 --save

# 兼容
npm install babel-polyfill --save
```

- 图标对应的字体编码：
  搜索 `&#xe67d;`、返回 `&#xe685;`、向下箭头 `&#xe688;`、图片 `&#xe77b;`

- 改目录别名

  - 旧版 cli 改别名，在 build 文件夹下的 webpack.base.conf.js 找到 alias，设置别名`'styles': resolve('src/assets/styles')`
  - 新版 cli 改别名，创建 vue.config.js 文件并写入配置

- styles 文件夹下有 variables.styl 文件，用于定义存放 stylus 变量；在 css 中引入其他 css，并想要使用别名 styles 时，需要加~，如`@import '~styles/variables.styl'`，其中 `@import` 用于从其他样式表导入样式规则

- `import Vue from 'vue'`和`require('vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css')` 中的路径等相对的都是 travel 下的 node_modules 文件夹

- 页面跳转，设置 router，给对应跳转图标包裹 `router-link` 标签，并设置属性如 `to="/city"`

- 数据放在 public 文件夹中
