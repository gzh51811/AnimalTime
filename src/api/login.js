const express = require('express');
//连接数据库操作模块
const db = require('./modules/db');
const Router = express.Router();
//插入用户
Router.route('/')
    .get(async (req, res) => {
        let { username } = req.query;
        let result = await db.find('user', {}, { username });
        if ((result.data).length > 0) {
            res.send('yes');
        } else {
            res.send('no');
        }
    })
module.exports = Router;
