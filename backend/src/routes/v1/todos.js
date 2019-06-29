const { ulid } = require('ulid')
const express = require('express')
const store = require('../../store')

const router = express.Router()

router.get('/', (_, res) => {
  const todos = store.collection('todos')
  res.json(todos.list())
})

router.post('/create', (req, res) => {
  const todos = store.collection('todos')
  todos.create({ completed: false, text: '', ...req.body, id: ulid() })
  res.json(todos.list())
})

router.delete('/delete', (req, res) => {
  const todos = store.collection('todos')
  todos.delete(req.body.id)
  res.json(todos.list())
})

router.put('/update', (req, res) => {
  const todos = store.collection('todos')
  todos.update({ ...req.body })
  res.json(todos.list())
})

module.exports = router
