import express from 'express';
import mongoose from 'mongoose';
import ApiRoutes from './routes';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', ApiRoutes)
app.get("/", (req: any, res: any) => {
    console.log("abc")
    console.log(req, res)
    res.json({message: "success11"})
})
const ur = "mongodb+srv://sharan123:sharan123k@cluster0.ytgcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(
    ur,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log("DB connection established");
    }
  );

app.listen(5000, () => {
    console.log("server started at 5000")
})