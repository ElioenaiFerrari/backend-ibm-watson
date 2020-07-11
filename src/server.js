import app from './config/app';
import serverConfig from './config/server'

const {
  PORT
} = serverConfig;

function listenMessage() {
  return console.log(`Listen on http://localhost:${PORT}`);
}

app.listen(PORT, listenMessage);