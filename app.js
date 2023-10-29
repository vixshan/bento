import dotenv from 'dotenv'
import fetch from 'node-fetch' // You need node-fetch to use fetch in node.js
import fastify from 'fastify'

dotenv.config()

const app = fastify({
  logger: true,
})

app.get('/*', async (request, reply) => {
  let someHost = 'https://bento.me'
  const path = request.url

  if (path.includes('v1')) {
    someHost = 'https://api.bento.me'
  }

  let url = someHost + path
  if (url === 'https://bento.me/') {
    url = 'https://bento.me/' + process.env.BENTO_USERNAME
  }

  const init = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'content-type': 'text/plain;charset=UTF-8',
    },
  }
  const gatherResponse = async (response, contentType) => {
    if (contentType.includes('application/json')) {
      return JSON.stringify(await response.json())
    } else if (contentType.includes('application/text')) {
      return await response.text()
    } else if (contentType.includes('text/html')) {
      return await response.text()
    } else {
      return await response.text()
    }
  }
  console.log(url)

  const response = await fetch(url, init)
  const contentType = response.headers.get('content-type')
  let results = await gatherResponse(response, contentType)
  results = results.replaceAll('https://api.bento.me', process.env.BASE_URL)

  init.headers['content-type'] = contentType

  reply.headers(init.headers).send(results) // You need to call reply.headers, not reply(header)
})

app.listen(
  {
    port: process.env.PORT || 3000, // Provide a default value for PORT
    host: process.env.HOST || '0.0.0.0', // Provide a default value for HOST
  },
  (err, address) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
  }
)
