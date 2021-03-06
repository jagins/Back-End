const db = require('../database/dbConfig');

function find() {
    return db('users')
    .select('id', 'firstName', 'lastName', 'email');
}

function findBy(filter) {
    return db('users')
    .where(filter);
}

function add(user) {
    return db('users')
    .insert(user, 'id')
}

function findById(id) {
    return db('users')
    .where ({id})
    .first();
}

module.exports = {
    add, 
    find,
    findBy,
    findById
}