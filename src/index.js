import express from 'express'
import http from 'http'
import ParseDashboard from 'parse-dashboard'
import config from '../config'
import objenv from 'objenv'
import pkg from '../package.json'

objenv(config, {prefix: 'APS', camelCase: true}, (key, value) => {
  console.log('%s %s', key, value)
})

const dashboard = new ParseDashboard(
  config,
  Boolean(config.allowInsecureHTTP)
)

const app = express()

app.use('/', dashboard)

const httpServer = http.createServer(app)

httpServer.listen(config.port, () => {
  console.log('%s (%s) running on port %s.', pkg.name, pkg.version, config.port)
})
