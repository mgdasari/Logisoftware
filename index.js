var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.json());

require("./routes/routes")(app);

app.listen(8000, () => {
  console.log("server started listing on 8000 port");
});
