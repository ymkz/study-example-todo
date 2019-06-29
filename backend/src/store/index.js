const { cwd } = require('process')
const { resolve } = require('path')
const { DataStore } = require('notarealdb')

const store = new DataStore(resolve(cwd(), 'data'))

module.exports = store
