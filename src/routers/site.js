import express from'express';
import siteController from '../app/controllers/siteController';

const router = express.Router();


//  Cấu hình đường dẫn cấp 2

// :slug là một biến động có giá trị nạp vào
router.get('/:slug', siteController.search);
router.get('/', siteController.index);

module.exports = router;
