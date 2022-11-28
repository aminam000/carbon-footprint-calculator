const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const router = express.Router();
const axios = require('axios');
const profile = require('./routes/profile.router')

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const valuerouter = require('./routes/value.routes')
const userRouter = require('./routes/user.router');
const totalrouter = require('./routes/total.router')
// const calcRouter = require('./routes/calculated.router');
// const choiceRouter = require('./routes/choices.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// app.use('/api/:answers', answersRouter);
// app.use('/api/choices', choicesRouter);

/* Routes */
app.use('/api/user', userRouter);
// app.use('/api/calculate', calcRouter);
// app.use('/api/:choices', choiceRouter);
app.use('/values', valuerouter);
app.use('/total' , totalrouter);
app.use('/profile', profile);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
