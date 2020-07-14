const app = require('./config/app');
const serverConfig = require('./config/server');

const { PORT } = serverConfig;

function listenMessage() {
  return console.log(`Listen on http://localhost:${PORT}`);
}

app.listen(PORT, listenMessage);
