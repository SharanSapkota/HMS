import Mongoose, {Schema} from 'mongoose';

const categorySchema: Schema = new Schema({
    
        name:{
            type: String,
            required: false
        },
    description: {
        type: String,
        required: false

    },
   
}, {
    timestamps: true
})

const FoodCategoryModel = Mongoose.model("category", categorySchema)

export default FoodCategoryModel