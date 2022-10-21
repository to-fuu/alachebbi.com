const express = require('express')
const next = require('next')
const vhost = require('vhost')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const mainServer = express()
  const resumeServer = express()
  const memberServer = express()

  resumeServer.get('/', (req, res) => {
    return app.render(req, res, '/resume', req.query)
  })

  resumeServer.get('/*', (req, res) => {
    return app.render(req, res, `/resume${req.path}`, req.query)
  })

  resumeServer.all('*', (req, res) => {
    return handle(req, res)
  })

  memberServer.all('*', (req, res) => {
    return handle(req, res)
  })

  mainServer.use(vhost('resume.alachebbi.com', resumeServer))
  mainServer.use(vhost('alachebbi.com', memberServer))
  mainServer.use(vhost('www.alachebbi.com', memberServer))
  mainServer.listen(port, (err) => {
    if (err) throw err

    console.log(`> Ready on http://alachebbi.com:${port}`)
  })
})