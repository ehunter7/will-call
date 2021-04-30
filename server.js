const express = require("express");
const app = express();

const mongoose = require("mongoose");

// const passport = require("./config/passport");

const routes = require("./routes");

const PORT =  4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

//add routes for api calls
app.use(routes);

//connect to mongo DB
mongoose.connect("mongodb+srv://ehunter:Nathanwilliam1@cluster0.d2o6s.mongodb.net/willcallDB")


mongoose.connection.on("connected", () => {
    console.log("connected to mongoose");
  });
  
app.listen(PORT, () => {
  console.log(`API Server Listening on port ${PORT}`);
});
