const express = require('express');
const Router = express.Router();


const ordersRouter = require('./lists')
const orderRouter = require('./orders')
const ordersRouters = require('./listss')
const loginRouter = require('./login');
const loginsRouter = require('./logins');
const goodsRouter = require('./goods');
const pinlunRouter = require('./pinlun')
const cartRouter = require('./cart')



Router.use('/lists', ordersRouter)
Router.use('/listss', ordersRouters)
Router.use('/goods', goodsRouter);
Router.use('/login', loginRouter)
Router.use('/logins', loginsRouter)
Router.use('/pinlun', pinlunRouter)
Router.use('/cart', cartRouter)
Router.use('/orders', orderRouter)

module.exports = Router;  