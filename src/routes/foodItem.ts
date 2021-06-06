import {Router} from 'express';
import { getAllFoods } from '../controllers/FoodItem';

const router = Router();

router.get('/', getAllFoods)

export default router;