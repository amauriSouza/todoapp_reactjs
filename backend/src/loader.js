const server = require('./config/server')
require('./config/database')

//chamando a funcao de routes
require('./config/routes')(server)
