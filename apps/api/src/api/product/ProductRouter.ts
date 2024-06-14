import { Router } from 'express';
import {
  createProductController,
  deletedProductController,
  findAllProductController,
  findProductByIdController,
  updateProductController,
} from './ProductController';
import { uploader } from '@/middleware/Uploader';

const router = Router();

router.post('/', uploader, createProductController);
router.put('/:id', uploader, updateProductController);
router.get('/:id', findProductByIdController);
router.get('/', findAllProductController);
router.delete('/', deletedProductController);
export default router;
