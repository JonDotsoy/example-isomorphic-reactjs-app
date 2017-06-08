import express from 'express'
import React from 'react'
import template from 'lodash/template'
import ReactDOMServer from 'react-dom/server'
import App from '../app'

const app = express()

const templateMain = template(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><%= title %></title>
  </head>
  <body>
    <div id="app"><%= body %></app>
    <script src="/client.js"></script>
  </body>
</html>
`)

app.use(express.static('www'))

app.get('/', function (req, res) {
  res.type('html').end(
    templateMain({
      title: 'a title',
      body: ReactDOMServer.renderToString(<App />)
    })
  )
})

const server = app.listen(3000, function () {
  const {address, port} = server.address()

  console.log(`Open server on address: ${address} and port: ${port}`)
})