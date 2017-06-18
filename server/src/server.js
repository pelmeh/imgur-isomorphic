import path from 'path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { Imgur, store } from './../../client/src/'

const Server = express()
Server.get('/', handler)
Server.use('/', express.static(path.resolve('client/public')))
Server.listen(8080)
console.log('Server running at http://localhost:8080/')

function handler (req, res) {
  const html = renderToString(Imgur)
  const preloadedState = store.getState()
  res.send(render(html, preloadedState))
}

function render (html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Imgur API</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
        <link rel="stylesheet" href="main.css">
        <style>
          html, body {
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}
