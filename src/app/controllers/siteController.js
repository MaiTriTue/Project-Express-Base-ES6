// const connection = require('../config/database');

class SiteController {
    //[GET] /

    async index(req, res) {
        // connection.connect();

        // connection.query('select * from Users;', (err, rows, fields) => {
        //     if (err) throw err;

        //     console.log('The solution is: ', rows[0]);
        // });

        // connection.end();
        res.render('home');
    }

    //[GET] /news/:slug
    async search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
// module.exports = new SiteController();
