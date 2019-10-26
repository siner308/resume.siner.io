const express = require('express');
const path = require('path');

const router = require('./routes');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('port', 80);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(app.get('port'), () => {
  console.log(`Example app listening on http://localhost:${app.get('port')}`);
});
