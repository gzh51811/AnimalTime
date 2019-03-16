// const request = require('request');

// let url = 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=cat&version=358&system=wap&isWeb=1&_=1552661835328'
// let r = request.get(url);

// r.encoding = 'GBK';
// console.log(r)


var request = require('request');
// var iconv = require('iconv-lite');
// var cheerio = require('cheerio');
request.get({ url: 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=cat&version=358&system=wap&isWeb=1&_=1552661835328', encoding: null }, function (err, response, body) {
    // var buf = iconv.decode(body, 'gb2312');
    console.log(body)
});
