const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();
//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//格式
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
//详情页添加购物车
Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    let { params } = req.body;
    let { id, num, zi } = params;

    //购物车有该商品，更新数据
    if (zi == 'chaxun') {
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('list'); //连接数据库
            //连接集合
            let collecton = db.collection('cart');
            //
            let data = await db.find('cart', { id: id }).toArray();
            let date = await db.find('list', { id: id })
            if (data.length > 0) {
                let data_1 = await collecton.update({ "id": "id" }, { "$inc": { "qty": num } })
                // 查全部返回长度
                res.send(data_1)
            } else {
                //购物车没有数据
                let dataa = date[0];
                let data1 = await db.insert('cart', { ...dataa, qty: num });
                res.send(data1)
            }
        })
    }

});
module.exports = Router;