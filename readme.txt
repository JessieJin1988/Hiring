
webPack�vue��Ŀ

1,׼�� node v10.13.0   vue 3.4.1
2��������Ŀ�ļ���  Hiring


3����װwebpack
���� HiringĿ¼��

npm i webpack -g 

webpack@4.29.6



4,�½�package.json  
npm init -y  ���е�Ĭ��ΪYes


5����װ vue webpack webpack-dev-server

npm i vue --save
npm i webpack webpack-dev-server --save-dev

6��
��Ŀ¼���½�index.html
��Ŀ¼���½�webpack.config.js

7,�½�src�ļ���
����main.js
���� util.js

8,�޸�webpack.config.js
9,�޸�package.josn


10, �޸� index.html ����������ļ�

11��npm run dev

12 npm install -D webpack-cli 

13��npm run dev������localhost:8080,����̨�����

14���޸�util�ļ��Զ�ˢ��

15��npm run build �Զ����� dist�ļ��� ��������build.js�ļ�

16��webpackĬ�ϲ�֧��ת��es6������import export�������﷨ȴ����֧�֡��������ǿ��Ը�дǰ���ģ�黯д��

17,����vue,�޸�webpacke.config relove alias

18������scss��css   webpackĬ��ֻ֧��js��ģ�黯�������Ҫ�������ļ�Ҳ����ģ�����룬����Ҫ���Ӧ��loader������

npm i node-sass css-loader vue-style-loader sass-loader --save-dev

{
    test: /\.css$/,
    use: [
        'vue-style-loader',
        'css-loader'
    ],
}��δ�����˼�ǣ�ƥ���׺��Ϊcss���ļ�,Ȼ��ֱ���css-loader��vue-style-loaderȥ����
��������ִ��˳���Ǵ�������(��css-loader��vue-style-loader)

��Ϊ����������vue����������ʹ��vue-style-loader���������ʹ��style-loader

19ʹ��babelת��  ES6���﷨�������������ɲ�֧��,bable���԰�ES6ת���ES5�﷨���������ǾͿ��Դ󵨵�����Ŀ��ʹ������������

npm i babel-core babel-loader babel-preset-env babel-preset-stage-3 --save-dev

20 ����Ŀ��Ŀ¼�½�һ��.babelrc�ļ�
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}

webpack.config.js���һ��loader
{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
}
exclude��ʾ����node_modules�ļ����µ��ļ�������ת��

���ֱ�����
Error: Cannot find module '@babel/core'
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to
 use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
 
ж�� babel-core ��װ @babel/core

�б���
SyntaxError: D:\99-works\Hiring\.babelrc: Error while parsing config - JSON5: in
valid character '}' at 6:1

���ְٶ�babelrc�����ã�������򵥵����ڲ�����
{
 "presets":["env"]
}
����ɹ�������̨�ᱨһ������regeneratorRuntime is not defined����Ϊ����û�а�װbabel-polyfill




����ͼƬ��Դ npm i file-loader --save-dev
{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]?[hash]'
    }
}
��srcĿ¼���½�һ��imgĿ¼�����һ��ͼƬlogo.png

�޸�main.js


Vue.component('my-component', {
  template: '<img :src="url" />',
  data() {
    return {
      url: require('./img/logo.png')
    }
  }
})


html������ <my-component/>


��ǰ������������ʹ�� Vue.component ������ȫ�����
��ʵ����Ŀ����Ƽ�ʹ�õ��ļ����

Vue packages version mismatch:

- vue@2.6.8 (D:\99-works\Hiring\node_modules\vue\dist\vue.runtime.common.js)
- vue-template-compiler@2.6.10 (D:\99-works\Hiring\node_modules\vue-template-compiler\package.json)

This may cause things to work incorrectly. Make sure to use the same version for both.
If you are using vue-loader@>=10.0, simply update vue-template-compiler.
If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.


��������
ж���˰����� vue��vue-template-compiler������ͬ�汾�����ϴ����������´���

Failed to compile.

./src/App.vue
Module Error (from ./node_modules/vue-loader/lib/index.js):
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.

VueLoaderPlugin


webpack�����ļ��� ���룺
const { VueLoaderPlugin } = require('vue-loader')



	plugins:[
		new VueLoaderPlugin()
	]

	
npm run dev�����Է��ֵ��ļ�����ȷ������

cross-env    �Ż����
npm package�ű�����
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
}



npm run build


vue-template-compiler   peer dependencies

Ĭ������� vue-template-compiler ����Ϊ peerDependencies �ģ�Ҳ���� npm install ��ʱ���ǲ����Զ���װ�ģ�����ʵ����Ŀʹ�� .vue �ļ�ʱ��ȱ������������ǻᱨ��ģ�Ȼ�󲻵ò��ֶ���װ�����齫 vue-template-compiler �����Ƶ� dependencies �С�
��������� vue-template-compiler 

Module not found: Error: Can't resolve 'vue' in

npm i vue --save 



