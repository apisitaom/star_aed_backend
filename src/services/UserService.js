const { user } = require('../sequlize/models');
const Helper = require('../lib/Helper');
// DATABASE
const db = require('../sequlize/config/condigdb');
function userRegister(req, res) {
  console.log(req.body);
  console.log(req.params);
  console.log('register user');
  // const { rows } =  user;
  const hashPassword = Helper.Helper.hashPassword(req.body.password);
  user.create({
    username: req.body.username,
    password: hashPassword,
    userroleid: req.body.userroleid,
    orgaid: req.body.orgaid,
    organiztype: req.body.organiztype,
  })
    .then((rows) => res.status(200).send(rows))
    .catch((error) => res.status(400).send(error));
}

async function login(req, res) {
  console.log(req.body);
  console.log(req.params);
  console.log('login user');

  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ message: 'missing values' });
  }
  const sql = 'SELECT * FROM users WHERE username = $1';
  try {
    const { rows } = await db.query(sql, [req.body.username]);
    if (!rows[0]) {
      return res.status(400).send({ message: 'Missing values' });
    }
    if (!Helper.Helper.comparePassword(rows[0].password, req.body.password)) {
      return res.status(400).send({ message: 'Invalid password' });
    }
    const token = Helper.Helper.generateToken(rows[0].id);
    const response = {
      status: '200',
      message: 'success',
      result: token,
    };
    console.log(rows);
    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).send({ message: 'error' });
  }
}

module.exports = { userRegister, login };
