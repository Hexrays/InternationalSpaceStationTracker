var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

const port = process.env.PORT || 9000;

var axios = require('axios');

const API_URL = 'http://api.open-notify.org/iss-now.json';

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/iss', function(req,res) {
  axios.get(API_URL)
    .then(response => {
      res.send(response.data);
    });
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at', port);
});
