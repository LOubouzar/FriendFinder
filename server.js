var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
      });