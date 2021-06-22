const express = require("express");
const app = express();

const mongoose = require("mongoose");

const passport = require("./config/passport");

const routes = require("./routes");

const session = require("express-session");

require("dotenv").config();

const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//add routes for api calls
app.use(routes);

//connect to mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/willcallDB", {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 1000,
  useCreateIndex: true,
  useFindAndModify: false,

});

mongoose.connection.on("connected", () => {
  console.log("connected to mongoose");
});

app.listen(PORT, () => {
  console.log(`API Server Listening on port ${PORT}`);
});
