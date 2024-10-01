class NewsController {
    //[GET] /new

    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.render('news detail');
    }
}

module.exports = new NewsController();
