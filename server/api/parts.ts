// const partsController = require('../controllers/partsController')
import * as partsController from '../controllers/partsController'

import * as express from 'express'
const router: express.Router = express.Router()

module.exports = (app: express.Application): void => {
  console.log('[ROUTES] INITIALIZING PARTS')

  app
    .route('/parts')
    .post(partsController.createPart)
    .get(partsController.listAllParts)
}
