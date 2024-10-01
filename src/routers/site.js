import express from'express';
import siteController from '../app/controllers/siteController.js';

const router = express.Router();


//  Cấu hình đường dẫn cấp 2

// :slug là một biến động có giá trị nạp vào
router.get('/:slug', siteController.search);
router.get('/', siteController.index);

export  default  router;
