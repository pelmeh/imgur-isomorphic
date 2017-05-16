import path from 'path'
import express from 'express'

const App = express()
App.use('/', express.static(path.resolve('client/public')))
App.listen(8080)

console.log('Server running at http://localhost:8080/')
