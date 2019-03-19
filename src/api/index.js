const express = require('express');
const Router = express.Router();


const ordersRouter = require('./lists')
const ordersRouters = require('./listss')
// const listRouter = require('./list');
const goodsRouter = require('./goods');
const pinlunRouter = require('./pinlun')
const cartRouter = require('./cart')


Router.use('/lists', ordersRouter)
Router.use('/listss', ordersRouters)
Router.use('/goods', goodsRouter);
// Router.use('/logins', loginsRouter)
// Router.use('/list',listRouter)
// Router.use('/goods',goodsRouter)
Router.use('/pinlun', pinlunRouter)
Router.use('/cart', cartRouter)

module.exports = Router;  