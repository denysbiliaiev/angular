exports.get = function(req, res, next) {
    if (res.req.headers['x-requested-with'] == 'XMLHttpRequest'){
        //console.log(req);
        return res.send("{'name': '111111111'}");
    }
    res.render('backbone');
};

exports.post = function(req, res, next) {
    //console.log(res);
    return res.send('{name: POST}');
};

