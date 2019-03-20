const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const Router = express.Router();
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
Router.post('/', urlencodedParser, (req, res) => {
    //获取前端数据
    let { nickname, password } = req.body;
    console.log(nickname);
    MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true }, (err, database) => {
        if (err) throw err;
        let db = database.db('vipcars');
        let admin = db.collection('user');
        admin.findOne({ nickname, password }, (err, result) => {
            let data;
            let cid = result.cid;
            let _id = result._id;
            console.log(_id);
            if (result) {
                data = {
                    code: 0,
                    msg: 'ok',
                    cid,
                    _id
                }
            } else {
                data = {
                    code: 1,
                    msg: 'fail',
                }
            }
            res.send(data);
        });
    });
});
module.exports = Router;