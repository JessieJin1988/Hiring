var path = require('path');
var webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry:['babel-polyfill','./src/main.js'],// 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
	output:{
		path:path.resolve(__dirname,'./dist'),// 项目的打包文件路径
		publicPath:'/dist/',// 通过devServer访问路径
		filename:'build.js'// 打包后的文件名
	},
	devServer:{
		historyApiFallback:true,
		overlay:true
	}
	,
	resolve:{
		alias:{//配置项通过别名来把原导入路径映射成一个新的导入路径?????
			'vue$':'vue/dist/vue.esm.js'
		}
	},
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],//匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
				  //解析器的执行顺序是从下往上(先css-loader再vue-style-loader)
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': [
							'vue-style-loader',
							'css-loader',
							'sass-loader'
						],
						'sass': [
							'vue-style-loader',
							'css-loader',
							'sass-loader?indentedSyntax'
						]
					}
				}
			}
		]
    },
	plugins:[
		new VueLoaderPlugin()
	]
};


	if (process.env.NODE_ENV === 'production') {
		module.exports.devtool = '#source-map';
		module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ])
  }