const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/movies_back/filmsapp/src'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/movies_back/filmsapp/src/index.html'));});
app.listen(process.env.PORT || 8080);

