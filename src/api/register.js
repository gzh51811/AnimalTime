const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const Router = express.Router();
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    //获取前端数据
    let { user, psw } = req.body;
    MongoClient.connect('mongodb://127.0.0.1:27017', async (err, client) => {
        if (err) throw err;
        let db = client.db('list');
        let admin = db.collection('user');
        let data = await admin.insert({ user, psw });

        res.send(data)

    });
});
module.exports = Router;