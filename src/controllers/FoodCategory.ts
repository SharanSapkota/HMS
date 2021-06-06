import { RequestController } from './types/types';
import FoodCategoryModel from '../models/FoodCategory'

const getAllCategory: RequestController = async(req, res) => {
  try{
      const getAllCategory = await FoodCategoryModel.find()
      res.status(200).json({success: true, getAllCategory})
  }
  catch(e) {
      res.status(400).json({success: false, error: e.message})
  }
}

const postCategory: RequestController = async (req, res) => {
    console.log(req.body)
try{
    const postCategory = new FoodCategoryModel(req.body)
    const savedCategory = await postCategory.save() 
    res.status(201).json({success: true, savedCategory})}
catch(e) {
    res.status(400).json({success: false, error: e.message})
}
}

export {
    getAllCategory,
    postCategory
};