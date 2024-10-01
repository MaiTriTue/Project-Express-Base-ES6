import newRouter from './news.js';
import siteRouter from './site.js';

function router(app) {
    // Cấu hình đường dẫn chính: /news , ...

    app.use('/news', newRouter);
    app.use('/', siteRouter);
}

export  default router;
