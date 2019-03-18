const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const Router = express.Router();
const MongoClient = mongodb.MongoClient;
let jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    //获取前端数据
    let { id } = req.query;
    id = id * 1
    MongoClient.connect('mongodb://127.0.0.1:27017', async (err, database) => {
        if (err) throw err;
        let db = database.db('list');
        let admin = db.collection('left');
        let data = await admin.find({ id }).toArray();
        res.send(data);
    });
});
module.exports = Router;