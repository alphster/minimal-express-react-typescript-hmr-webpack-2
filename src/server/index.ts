import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackClientConfiguration from './../../webpack.client.config'

const app = express()
const webpackClientCompiler = webpack(webpackClientConfiguration)

app.use(
  // @ts-expect-error conflicting TS for 'compiler', may be fixed with future update
  webpackDevMiddleware(webpackClientCompiler, {
    //publicPath: config.output.publicPath,
  })
);

app.use(require("webpack-hot-middleware")(webpackClientCompiler, {
  //path: '/__webpack_hmr', 
  //heartbeat: 10 * 1000
}));

const port = 3000

app.get('/hey', (req, res) => {
  res.send('ho')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

