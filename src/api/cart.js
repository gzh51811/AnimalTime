const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();
//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//格式
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();
//增加商品
Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    let { shuju, id, value } = req.query;
    id = id * 1;
    value = value * 1
    if (shuju == "update") {
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('list'); //连接数据库
            let collecton = db.collection('cart');
            let data_update = await collecton.updateOne({ id }, { $set: { 'qty': value } })
            res.send(data_update)
        })
    }
    ///数据渲染
    if (shuju == 'xl') {
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('list'); //连接数据库
            // 使用某个集合
            // let num=10;
            let collecton = db.collection('cart');
            let data = await collecton.find().limit(10).toArray();
            // let data= await db.find('list');
            client.close();
            // 查全部返回长度
            res.send(data)
        })
    }
    if (shuju == 'chaxun') {
        // 购物车有该商品，更新数据
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('list'); //连接数据库
            //连接集合
            let collecton = db.collection('cart');
            let data_1 = await collecton.deleteOne({ id })
            // 查全部返回长度
            res.send(data_1)
        })
    }
});
// const db = require('./modules/db');
//详情页添加购物车
Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    let { params } = req.body;
    let { id, num } = params;
    id = id * 1;

    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;

        //购物车有该商品，更新数据
        let db = client.db('list');
        let cart = db.collection('cart');
        let list = db.collection('list');
        let data = await cart.find({ id }).toArray();
        let date = await list.find({ id }).toArray();

        if (data.length > 0) {
            //有该商品，更新数量
            MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
                if (err) throw err;
                let dbw = client.db('list');//连接数据库
                let collection = dbw.collection('cart')
                let data1 = await collection.update({ 'id': id }, { $inc: { 'qty': num } })
                res.send(data1);
            });
        } else {
            //购物车无该商品
            let dbw = client.db('list');//连接数据库
            let collection = dbw.collection('cart')
            let data2 = date[0];
            let date1 = await collection.insertMany({ ...data2, 'qty': num });
            res.send(date1)
        }
    });
    //删除商品

});
Router.delete('/', urlencodedParser, jsonParser, async (req, res) => {
    let { id } = req.query
    // 购物车有该商品，更新数据
    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;
        
        let db = client.db('list'); //连接数据库
        //连接集合
        let collecton = db.collection('cart');

        let data_1 = await collecton.deleteOne({ id:id*1 });
        res.send(data_1)
    })

});
module.exports = Router;