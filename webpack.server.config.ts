import { resolve } from 'path';
import { Configuration } from "webpack"
import nodeExternals from 'webpack-node-externals'
import NodemonPlugin from 'nodemon-webpack-plugin'
import DotenvPlugin from 'dotenv-webpack'
import dotenv from 'dotenv'

const {
	BASE_PROTOCOL, BASE_DOMAIN, BASE_PORT
} = dotenv.config().parsed!

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
		// @ts-expect-error incompat dotenv with compiler
		new DotenvPlugin(),
		new NodemonPlugin({
			events: {
				start: `yarn open-cli ${BASE_PROTOCOL}://${BASE_DOMAIN}:${BASE_PORT}`
			}
		})		
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
						presets: [
							"@babel/preset-env",
							'@babel/preset-typescript'
						]
					}
				}
			}
		]
	}
};

export default config;