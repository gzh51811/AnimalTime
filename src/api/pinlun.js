const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();
//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//格式
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    let { shuju } = req.query;

    if (shuju == 'xl') {
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('list'); //连接数据库
            // 使用某个集合
            // let num=10;
            let collecton = db.collection('pinlun');
            let data = await collecton.find().limit(10).toArray();
            // let data= await db.find('list');
            client.close();
            // 查全部返回长度
            res.send(data)
        })
    }
});
module.exports = Router;