const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const reqIp = require('request-ip');
// const path  = require('path');
//  ROUTE
const user = require('./routes/UserRoute');
const aed = require('./routes/aed');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const clientIp = reqIp.getClientIp(req);
  const currentDatetime = new Date();
  const formattedDate = `${currentDatetime.getFullYear()} - ${(currentDatetime.getMonth() + 1)} - ${currentDatetime.getDate()}  ${currentDatetime.getHours()} : ${currentDatetime.getMinutes()} : ${currentDatetime.getSeconds()}`;
  console.log(`New Request = ${formattedDate}, IP IPV4 = ${clientIp}`);
  next();
});


// ROUTE
app.use('/user', user);
app.use(aed);
app.get('/', (req, res) => {
  res.json({ info: `welcome  to project start on ${port}` });
});

app.listen(port, () => {
  console.log(`AED START ON PORT : ${port}`);
});
