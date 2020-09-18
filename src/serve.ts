import express from 'express'
import * as path from 'path'
import serveIndex from 'serve-index'

const app = express()

const relative = (...paths: string[]) => path.join(__dirname, 'public', ...paths)

app.use('/', express.static(relative()))
app.use('/', serveIndex(relative()))

app.get('/converter', (_req, res) => {
  res.sendFile(relative('converter.html'))
})

app.get('/playground', (_req, res) => {
  res.sendFile(relative('playground.html'))
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
