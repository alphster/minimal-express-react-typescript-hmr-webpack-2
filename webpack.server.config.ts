import { resolve } from 'path';
import { Configuration } from "webpack"
import nodeExternals from 'webpack-node-externals'
import NodemonPlugin from 'nodemon-webpack-plugin'

const config: Configuration = {
  mode: 'development',
	target: 'node',
	externalsPresets: { node: true },
	// @ts-expect-error typing conflict, may be fixed in a future patch/update
	externals: [nodeExternals()],
  entry: resolve('./src/server/index.ts'),
  output: {
    path: resolve('./dist/server')
  },
	plugins: [
		new NodemonPlugin()		
	],
	resolve: {
		extensions: ['.ts', 'tsx', '.ejs']
	},
	module: {		
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: ['@babel/preset-typescript']
					}
				}
			}
		]
	}
};

export default config;