const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const port = 3000;
const session = require(`express-session`);
const auth = require(`./routes/auth`);
const home = require(`./routes/home`);
const logout = require(`./routes/logout`);
const MongoDBStore = require(`connect-mongodb-session`)(session);

const store = new MongoDBStore({
  uri: `mongodb+srv://sam12345:sam12345@cluster0-sft7v.mongodb.net/mongoTest?retryWrites=true&w=majority`,
  collection: `sessions`
});

app.use(session({
  secret: `name=Sam`,
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use(bodyParser.urlencoded({extended: false}));

app.set(`view engine`, `ejs`);
app.set(`views`, `views`);

app.use(auth);
app.use(home);
app.use(logout);

app.listen(port, console.log(
  `listening to server on port ${port}...`
));