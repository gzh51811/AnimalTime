const express = require('express');
const Router = express.Router();

// const regRouter = require('./reg');
// const loginRouter = require('./login');
// const loginsRouter = require('./logins');
const ordersRouter = require('./lists')
const ordersRouters = require('./listss')
// const listRouter = require('./list');
// const goodsRouter = require('./goods');

// Router.use('/reg', regRouter)
// Router.use('/login', loginRouter)
Router.use('/lists', ordersRouter)
Router.use('/listss', ordersRouters)
// Router.use('/logins', loginsRouter)
// Router.use('/list',listRouter)
// Router.use('/goods',goodsRouter)

module.exports = Router;