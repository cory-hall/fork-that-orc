// required libraries
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});

// init express
const app = express();
// init port
const PORT = process.env.PORT || 3001;

// init a session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create the session
const sess = {
   secret: 'Super secret secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize
   })
}

// middleware for express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

// setting the handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now listening!'));
});