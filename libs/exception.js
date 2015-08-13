module.exports = function(err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        log.info(err);
        res.sendHttpError(err);
    } else {
        if (app.get('env') == 'development') {
            log.info(err.message);
            err = new HttpError(500, err.message);
            res.sendHttpError(err);
        } else {
            log.info(err.message);
            err = new HttpError(500, err.message);
            res.sendHttpError(err);
        }
    }
};
