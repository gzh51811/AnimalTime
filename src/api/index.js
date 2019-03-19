const express = require('express');
const Router = express.Router();


const ordersRouter = require('./lists')
const ordersRouters = require('./listss')
const pinlunRouter = require('./pinlun')
const cartRouter = require('./cart')

Router.use('/lists', ordersRouter)
Router.use('/listss', ordersRouters)
Router.use('/pinlun', pinlunRouter)
Router.use('/cart', cartRouter)

module.exports = Router;  