import express from 'express';
import FoodCategory from './foodCategory'
import FoodItem from './foodItem'

const app = express();
app.use('/items', FoodItem)
app.use('/category', FoodCategory)


export default app