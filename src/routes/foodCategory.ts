import {Router} from 'express';
import { 
    getAllCategory, 
    postCategory 
} from '../controllers/FoodCategory';

const router = Router();

router.get('/', getAllCategory)
router.post('/', postCategory)

export default router;