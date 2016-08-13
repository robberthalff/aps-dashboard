module.exports = {
  port: '4040',
  allowInsecureHTTP: '1',
  apps: [
    {
      serverURL: 'http://localhost:1337',
      appId: 'myAppId',
      masterKey: 'myMasterKey',
      appName: 'MyApp'
    }
  ]
}
