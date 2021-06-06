// import {Router} from 'express';
import { RequestController } from './types/types';

// const router = Router()

const getAllFoods: RequestController = async(req, res) => {
    console.log("get all foods")
}

export {
    getAllFoods
};