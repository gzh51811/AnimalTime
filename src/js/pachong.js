// const request = require('request');

// let url = 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=cat&version=358&system=wap&isWeb=1&_=1552661835328'
// let r = request.get(url);

// r.encoding = 'GBK';
// console.log(r)


var request = require('request');
// var iconv = require('iconv-lite');
// var cheerio = require('cheerio');
request.get({ url: 'https://wap.epet.com/json/wapdata.html?inajax=1&t=1552817542544&callback=jQuery1710575791611274673_1552817542310&jsoncallback=EpetWap.Dynamic.action&app=union/trials/main&_=1552817542545', encoding: null }, function (err, response, body) {
    // var buf = iconv.decode(body, 'gb2312');
    console.log(body)
});
