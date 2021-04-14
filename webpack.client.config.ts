import { resolve } from 'path';
import { Configuration, HotModuleReplacementPlugin } from "webpack"
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
  mode: 'development',
	target: 'web',
	externals: [],
  entry: {
		main: ['webpack-hot-middleware/client?reload=true','./src/client/index.tsx']
	},
  output: {
    path: resolve('./dist/client')
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('./src/client/index.ejs')
		}),
		new HotModuleReplacementPlugin()
	],
	module: {		
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: [
							"@babel/preset-env",
							'@babel/preset-typescript',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	}
};

export default config;