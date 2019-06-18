const cors_proxy = require('cors-anywhere');

var host = 'https://pkpkpkpkpkpkpkpk.github.io/cors-anywhere-server';
var port = 8080;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  })
  .listen(port, host, () => (
    console.log(`CORS Anywhere server running on ${port}`)
  ));