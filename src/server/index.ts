import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackClientConfiguration from './../../webpack.client.config'

const app = express()

import { auth, requiresAuth } from 'express-openid-connect'
import { envCfg } from './config'

const config = {
  authRequired: true,
  baseURL: envCfg.BASE_URL,
  clientID: envCfg.CLIENT_ID,
  issuerBaseURL: envCfg.ISSUER_BASE_URL,
  secret: envCfg.SECRET
};

app.use(auth(config));

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

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user))
});

app.get('/hey', (req, res) => {
  res.send(process.env.ISSUER_BASE_URL)
})

/*
app.get('/', (req, res) => {
  // @ts-expect-error not recognizing oidc
  const oidc = req.oidc
  res.send(oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});
*/

app.listen(envCfg.BASE_PORT, () => {
  console.log(`Example app listening at ${envCfg.BASE_URL}`)
})

