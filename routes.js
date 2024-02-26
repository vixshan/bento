// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from '@edgio/core'

export default new Router()
  .match('/:path*', {
    origin: {
      set_origin: 'edgio_serverless',
    },
  })
  .static('public')
