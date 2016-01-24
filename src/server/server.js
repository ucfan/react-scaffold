import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

let app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/public', express.static(path.resolve(__dirname, '../public')));
if (!process.env.DEV) {
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
}

app.get('/', (req, res) => {
  res.sendFile('index.html', {
    root: path.resolve(__dirname, '../views/')
  }, (err) => {
    if (err) {
      console.error(err);
      res.status(400).end();
    }
  })
})

// ******************** FOR DEVELOPMENT ********************

import dev from './server.dev.js';

if (process.env.DEV) {
  console.log('Developing mode.')
  app = dev(app);
}

// ******************** FOR DEVELOPMENT ********************

app.listen(port);
console.log('listening on port ' + port);
