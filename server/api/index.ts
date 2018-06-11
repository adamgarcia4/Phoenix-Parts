// File responsible for passing app into all routes
const partsRoutes = require('./parts')

module.exports = app => {
  console.log('[ROUTES] INITIALIZING ROUTES')
  partsRoutes(app)
}
