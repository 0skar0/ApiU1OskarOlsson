const express = require('express');
const router = express.Router();

const students = require('./students.js');

router.get('/students', students.get);
router.get('/students/:id', students.getById);
router.post('/students', students.post);
router.put('/students/:id', students.put);
router.delete('/students/:id', students.deleteOneUser);

module.exports = router;
