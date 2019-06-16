const express = require('express');
const router = express.Router();

const students = require('./students.js');
const counter = require('./counter.js')

router.get('/students', students.get);
router.get('/students/:id', students.getById);
router.post('/students', students.post);
router.put('/students/:id', students.put);
router.delete('/students/:id', students.deleteOneUser);

router.get('/counter', counter.get)
router.put('/counter/:id', counter.put)
router.get('/counter/:id', counter.getById)

module.exports = router;
