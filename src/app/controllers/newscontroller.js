class NewsController {
    //[GET] /new

    async index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    async show(req, res) {
        res.render('news detail');
    }
}

export default new  NewsController();
// module.exports = new NewsController();
