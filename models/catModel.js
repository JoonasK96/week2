'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM wop_cat WHERE cat_id = ? OR name = ?', [id, name]);
  return rows;
} catch (e) {
  console.log('error', e.message);
}
};

const insertCat = async (cat) => {
  try {
    console.log('cat_post', req.body);
    const [rows] = await promisePool.query('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?)',
    [ cat.name, cat.age, cat.weight, cat.owner, cat.filename ]);
  return rows[0];
} catch (e) {
  console.log('error', e.message);
}
};

module.exports = {
  getAllCats,
  getCat,
  insertCat
};