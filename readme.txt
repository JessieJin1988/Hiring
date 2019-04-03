
webPack搭建vue项目

1,准备 node v10.13.0   vue 3.4.1
2，创建项目文件夹  Hiring


3，安装webpack
进入 Hiring目录下

npm i webpack -g 

webpack@4.29.6



4,新建package.json  
npm init -y  所有的默认为Yes


5，安装 vue webpack webpack-dev-server

npm i vue --save
npm i webpack webpack-dev-server --save-dev

6，
根目录下新建index.html
根目录下新建webpack.config.js

7,新建src文件夹
创建main.js
创建 util.js

8,修改webpack.config.js
9,修改package.josn


10, 修改 index.html 引入打包后的文件

11，npm run dev

12 npm install -D webpack-cli 

13，npm run dev，打开了localhost:8080,控制台有输出

14，修改util文件自动刷新

15，npm run build 自动生成 dist文件夹 并创建了build.js文件

16，webpack默认不支持转码es6，但是import export这两个语法却单独支持。所以我们可以改写前面的模块化写法

17,引入vue,修改webpacke.config relove alias

18，引入scss和css   webpack默认只支持js的模块化，如果需要把其他文件也当成模块引入，就需要相对应的loader解析器

npm i node-sass css-loader vue-style-loader sass-loader --save-dev

{
    test: /\.css$/,
    use: [
        'vue-style-loader',
        'css-loader'
    ],
}这段代码意思是：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
解析器的执行顺序是从下往上(先css-loader再vue-style-loader)

因为我们这里用vue开发，所以使用vue-style-loader，其他情况使用style-loader

19使用babel转码  ES6的语法大多数浏览器依旧不支持,bable可以把ES6转码成ES5语法，这样我们就可以大胆的在项目中使用最新特性了

npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev

20 在项目根目录新建一个.babelrc文件
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}

webpack.config.js添加一个loader
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
}
exclude表示忽略node_modules文件夹下的文件，不用转码

发现报错了
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to
 use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
 
卸载 babel-core 安装 @babel/core

有报错
SyntaxError: D:\99-works\Hiring\.babelrc: Error while parsing config - JSON5: in
valid character '}' at 6:1

各种百度babelrc的配置，用了最简单的终于不报错
{
 "presets":["env"]
}
编译成功，控制台会报一个错误regeneratorRuntime is not defined，因为我们没有安装babel-polyfill




引入图片资源 npm i file-loader --save-dev
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]?[hash]'
    }
}
在src目录下新建一个img目录，存放一张图片logo.png

修改main.js


Vue.component('my-component', {
  template: '<img :src="url" />',
  data() {
    return {
      url: require('./img/logo.png')
    }
  }
})


html里增加 <my-component/>


在前面的例子里，我们使用 Vue.component 来定义全局组件
在实际项目里，更推荐使用单文件组件

Vue packages version mismatch:

- vue@2.6.8 (D:\99-works\Hiring\node_modules\vue\dist\vue.runtime.common.js)
- vue-template-compiler@2.6.10 (D:\99-works\Hiring\node_modules\vue-template-compiler\package.json)

This may cause things to work incorrectly. Make sure to use the same version for both.
If you are using vue-loader@>=10.0, simply update vue-template-compiler.
If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.


继续报错
卸载了包，将 vue和vue-template-compiler升级成同版本的以上错误解除，报新错误

Failed to compile.

./src/App.vue
Module Error (from ./node_modules/vue-loader/lib/index.js):
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.

VueLoaderPlugin


webpack配置文件中 加入：
const { VueLoaderPlugin } = require('vue-loader')



	plugins:[
		new VueLoaderPlugin()
	]

	
npm run dev，可以发现单文件被正确加载了

cross-env    优化打包
npm package脚本更改
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
}



npm run build


vue-template-compiler   peer dependencies

默认情况下 vue-template-compiler 是作为 peerDependencies 的，也就是 npm install 的时候是不会自动安装的，但是实际项目使用 .vue 文件时，缺少这个依赖，是会报错的，然后不得不手动安装。建议将 vue-template-compiler 依赖移到 dependencies 中。
依赖中添加 vue-template-compiler 

Module not found: Error: Can't resolve 'vue' in

npm i vue --save 



