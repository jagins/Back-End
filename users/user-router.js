const router = require('express').Router();

const Users = require('./user-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});

router.post('/', (req, res) => {
    Users.add(req.body)
    .then(users => {
        res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;