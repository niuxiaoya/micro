const detail = require('./detail');
const content = require('./content');
const logined=require("./logined");
const inserted=require('./inserted');
module.exports = function (app) {
    app.get('/detail.html', detail);
    app.get('/content.html', content);
    app.post("/logined",logined);
    app.post("/inserted",inserted);
};