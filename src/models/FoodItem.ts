import  Mongoose, {Schema } from "mongoose";


const categorySchema: Schema = new Schema({
    name: {
        type: String,
        required: false

    },

    photo: {
        type: Document,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        required: false

    },

    },{
        timestamps: true
    }
    )

    module.exports = Mongoose.model("category", categorySchema)