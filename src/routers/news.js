import express from'express';
import newsController from '../app/controllers/newscontroller';

const router = express.Router();


//  Cấu hình đường dẫn cấp 2 < /news/...>

// :slug là một biến động có giá trị nạp vào
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
