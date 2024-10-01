import newRouter from './news';
import siteRouter from './site';

function router(app) {
    // Cấu hình đường dẫn chính: /news , ...

    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

module.exports = router;
