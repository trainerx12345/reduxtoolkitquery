const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const postRouter = require('./routes/postsRouter');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
dotenv.config();

//middlewares
app.use(
  helmet(),
  bodyParser.json(),
  cors(),
  express.urlencoded({ extended: true }),
  morgan('tiny')
);

//Routeres
app.use('/api/posts', postRouter);

//404 error
app.get('*', function (req, res) {
  res.status(404).json({
    message: 'What?? 🙅',
  });
});

// Run the server
const port = process.env.PORT || 3701;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log('Server running on port 3700');
  });
});
