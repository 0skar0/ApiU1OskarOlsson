const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require('./models');

const app = express();

//Setting the PORT variable, 2000 if unset (Just because React uses 3000 as default).
const port = process.env.PORT || 2000;

// Using cors to be able to do requests to localhost.
// Parsing the body to req.body.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/', routes);

// Starting up the database then the server to start listening to requests.
db.connectDb().then(() => {
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  })
}).catch((error) => {
  console.error(error);
});
