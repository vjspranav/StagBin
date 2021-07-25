var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// For Mongo
const cors = require("cors");
const mongoose = require("mongoose");

const DB_NAME = "TestMyBin";
let dbconfig = {};
try {
  dbconfig = require("./keys/prod.js");
} catch (ex) {
  dbconfig = {
    mongouri: process.env.ATLAS_URI,
  };
}
let mongouri = dbconfig.mongouri;
// Connect to moongose
// Connection to MongoDB
mongoose.connect(mongouri + "/" + DB_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", function () {
  console.log(
    `MongoDB database connection to db ${DB_NAME} established successfully !`
  );
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pasteRouter = require("./routes/paste");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/paste", pasteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
