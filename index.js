const cors_proxy = require('cors-anywhere');

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  })
  .listen(process.env.PORT || 8080, () => (
    console.log(`CORS Anywhere server running on ${host}:${port}`)
  ));