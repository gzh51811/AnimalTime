const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const Router = express.Router();
const { create } = require('./token');
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser =bodyParser.json();
Router.post('/', urlencodedParser,jsonParser,async (req, res) => {
    //获取前端数据
    let {user,psw}=req.body;
    MongoClient.connect('mongodb://127.0.0.1:27017',async (err, client) => {
        if (err) throw err;
        let db = client.db('list');
        let admin = db.collection('user');
        let data = await admin.findOne({user});


        let _token = create(data.user);



        if(user == data.user && psw == data.psw){
            res.send({
                    msg: 'success',
                    _token
                });
        }else{
            res.send('unsuccess');
        }
      
    });
});
module.exports = Router;