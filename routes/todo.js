const express = require('express')
const router = express.Router()
const TodoModel = require('../models/todo')

const join = require('../controller/todo')

// routing endpoint users utama
router.get('/Users', join.server)
router.post('/user', join.store)
router.put('/user/:id', join.update )
router.delete('/user/:id', join.junk )

module.exports = router