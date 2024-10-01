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

export default new  NewsController();
// module.exports = new NewsController();
