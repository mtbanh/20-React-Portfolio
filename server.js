var express = require('express')
const routes = require("./routes");
var PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  